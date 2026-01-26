import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { query, query2, query3 } from "./db/sql-config";
import bcrypt from "bcrypt";

interface AdminUser {
  id: number;
  username: string;
  password_hash: string;
}

interface BanRecord {
  id: number;
  ip_address: string;
  created_at: Date;
}

interface Genre {
  genre_id: number;
  genre_name: string;
}

interface Tag {
  tag_id: number;
  tag_name: string;
}

interface Author {
  author_id: number;
  author_name: string;
}

interface Show {
  show_id: number;
  title: string;
  image_url: string;
  total_episodes: number;
  rating: string | number;
  originality: string;
  release_year: string | number;
  time: string;
}

const failedAttempts: Map<string, { count: number; lastAttempt: number }> = new Map();

const MAX_FAILED_ATTEMPTS = 5;
const BAN_DURATION_MS = 15 * 60 * 1000;

function getClientIP(req: any): string {
  const forwarded = req.headers['x-forwarded-for'];
  if (forwarded) {
    const ips = forwarded.split(',');
    return ips[0].trim();
  }
  return req.ip || req.connection?.remoteAddress || 'unknown';
}

async function isIPBanned(ip: string): Promise<{ banned: boolean; remainingMinutes?: number }> {
  try {
    const bans = await query2<BanRecord[]>(
      "SELECT * FROM ban_users WHERE ip_address = ? ORDER BY created_at DESC LIMIT 1",
      [ip]
    );

    if (bans && bans.length > 0) {
      const banTime = new Date(bans[0].created_at).getTime();
      const now = Date.now();
      const elapsed = now - banTime;

      if (elapsed < BAN_DURATION_MS) {
        const remainingMs = BAN_DURATION_MS - elapsed;
        const remainingMinutes = Math.ceil(remainingMs / 60000);
        return { banned: true, remainingMinutes };
      } else {
        await query2("DELETE FROM ban_users WHERE ip_address = ?", [ip]);
      }
    }
    return { banned: false };
  } catch (error) {
    console.error("Error checking ban status:", error);
    return { banned: false };
  }
}

async function banIP(ip: string): Promise<void> {
  try {
    await query2(
      "INSERT INTO ban_users (ip_address, created_at) VALUES (?, NOW())",
      [ip]
    );
  } catch (error) {
    console.error("Error banning IP:", error);
  }
}

function recordFailedAttempt(ip: string): number {
  const now = Date.now();
  const record = failedAttempts.get(ip);

  if (record) {
    if (now - record.lastAttempt > BAN_DURATION_MS) {
      failedAttempts.set(ip, { count: 1, lastAttempt: now });
      return 1;
    }
    record.count++;
    record.lastAttempt = now;
    return record.count;
  } else {
    failedAttempts.set(ip, { count: 1, lastAttempt: now });
    return 1;
  }
}

function clearFailedAttempts(ip: string): void {
  failedAttempts.delete(ip);
}

export async function registerRoutes(app: Express): Promise<Server> {
  app.set('trust proxy', true);

  app.post("/api/admin/login", async (req, res) => {
    try {
      const clientIP = getClientIP(req);
      const { username, password } = req.body;

      const banStatus = await isIPBanned(clientIP);
      if (banStatus.banned) {
        return res.status(403).json({
          success: false,
          banned: true,
          message: `You have been temporarily banned from the login page due to too many failed attempts. Please try again in ${banStatus.remainingMinutes} minute(s).`
        });
      }

      if (!username || !password) {
        return res.status(400).json({ 
          success: false, 
          message: "Username and password are required" 
        });
      }

      const users = await query<AdminUser[]>(
        "SELECT id, username, password_hash FROM admin_users WHERE id = 1 AND username = ?",
        [username]
      );

      if (!users || users.length === 0) {
        const attempts = recordFailedAttempt(clientIP);
        const remaining = MAX_FAILED_ATTEMPTS - attempts;

        if (attempts >= MAX_FAILED_ATTEMPTS) {
          await banIP(clientIP);
          clearFailedAttempts(clientIP);
          return res.status(403).json({
            success: false,
            banned: true,
            message: "You have been temporarily banned from the login page due to too many failed attempts. Please try again in 15 minutes."
          });
        }

        return res.status(401).json({ 
          success: false,
          attemptsRemaining: remaining,
          message: `Wrong password or username, you are most probably not a admin. Do not try to login here, this area reserve to Admin only. (${remaining} attempt${remaining !== 1 ? 's' : ''} remaining)`
        });
      }

      const user = users[0];
      const passwordMatch = await bcrypt.compare(password, user.password_hash);

      if (!passwordMatch) {
        const attempts = recordFailedAttempt(clientIP);
        const remaining = MAX_FAILED_ATTEMPTS - attempts;

        if (attempts >= MAX_FAILED_ATTEMPTS) {
          await banIP(clientIP);
          clearFailedAttempts(clientIP);
          return res.status(403).json({
            success: false,
            banned: true,
            message: "You have been temporarily banned from the login page due to too many failed attempts. Please try again in 15 minutes."
          });
        }

        return res.status(401).json({ 
          success: false,
          attemptsRemaining: remaining,
          message: `Wrong password or username, you are most probably not a admin. Do not try to login here, this area reserve to Admin only. (${remaining} attempt${remaining !== 1 ? 's' : ''} remaining)`
        });
      }

      clearFailedAttempts(clientIP);

      res.cookie("admin_session", "authenticated", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 1000,
        sameSite: "strict"
      });

      return res.json({ 
        success: true, 
        message: "Welcome Admin to Hentai Saga Again" 
      });

    } catch (error) {
      console.error("Login error:", error);
      return res.status(500).json({ 
        success: false, 
        message: "An error occurred during login. Please try again." 
      });
    }
  });

  app.get("/api/admin/check-ban", async (req, res) => {
    try {
      const clientIP = getClientIP(req);
      const banStatus = await isIPBanned(clientIP);
      
      return res.json({
        banned: banStatus.banned,
        remainingMinutes: banStatus.remainingMinutes || 0
      });
    } catch (error) {
      console.error("Ban check error:", error);
      return res.json({ banned: false, remainingMinutes: 0 });
    }
  });

  app.get("/api/shows/recent", async (_req, res) => {
    try {
      const shows = await query3<Show[]>(`
        SELECT s.title, s.image_url, s.total_episodes, s.rating, s.originality, s.time, s.series_type,
               (SELECT MIN(ry.release_year) 
                FROM release_years ry 
                JOIN show_release_years sry ON ry.year_id = sry.year_id 
                WHERE sry.show_id = s.show_id) as release_year
        FROM shows s 
        ORDER BY s.updated_at DESC 
        LIMIT 10
      `);
      res.json(shows);
    } catch (error) {
      console.error("Error fetching recent shows:", error);
      res.status(500).json({ message: "Failed to fetch recent shows" });
    }
  });

  app.get("/api/shows", async (_req, res) => {
    try {
      const shows = await query3<Show[]>(`
        SELECT s.title, s.image_url, s.total_episodes, s.rating, s.originality, s.time, s.series_type,
               (SELECT MIN(ry.release_year) 
                FROM release_years ry 
                JOIN show_release_years sry ON ry.year_id = sry.year_id 
                WHERE sry.show_id = s.show_id) as release_year
        FROM shows s
      `);
      res.json(shows);
    } catch (error) {
      console.error("Error fetching shows:", error);
      res.status(500).json({ message: "Failed to fetch shows" });
    }
  });

  app.get("/api/genres", async (_req, res) => {
    try {
      const genres = await query3<Genre[]>("SELECT genre_id, genre_name FROM genres");
      res.json(genres);
    } catch (error) {
      console.error("Error fetching genres:", error);
      res.status(500).json({ message: "Failed to fetch genres" });
    }
  });

  app.get("/api/genres/:slug/shows", async (req, res) => {
    try {
      const slug = req.params.slug;
      const shows = await query3<Show[]>(`
        SELECT s.title, s.image_url, s.total_episodes, s.rating, s.originality, s.time, s.series_type,
               (SELECT MIN(ry.release_year) 
                FROM release_years ry 
                JOIN show_release_years sry ON ry.year_id = sry.year_id 
                WHERE sry.show_id = s.show_id) as release_year
        FROM shows s
        JOIN show_genres sg ON s.show_id = sg.show_id
        JOIN genres g ON sg.genre_id = g.genre_id
        WHERE g.genre_name = ?
      `, [slug]);
      res.json(shows);
    } catch (error) {
      console.error("Error fetching shows by genre:", error);
      res.status(500).json({ message: "Failed to fetch shows by genre" });
    }
  });

  app.get("/api/genres/id/:id/shows", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const shows = await query3<Show[]>(`
        SELECT s.title, s.image_url, s.total_episodes, s.rating, s.originality, s.time, s.series_type,
               (SELECT MIN(ry.release_year) 
                FROM release_years ry 
                JOIN show_release_years sry ON ry.year_id = sry.year_id 
                WHERE sry.show_id = s.show_id) as release_year
        FROM shows s
        JOIN show_genres sg ON s.show_id = sg.show_id
        WHERE sg.genre_id = ?
      `, [id]);
      res.json(shows);
    } catch (error) {
      console.error("Error fetching shows by genre ID:", error);
      res.status(500).json({ message: "Failed to fetch shows by genre ID" });
    }
  });

  app.get("/api/tags", async (_req, res) => {
    try {
      const tags = await query3<Tag[]>("SELECT tag_id, tag_name FROM tags");
      res.json(tags);
    } catch (error) {
      console.error("Error fetching tags:", error);
      res.status(500).json({ message: "Failed to fetch tags" });
    }
  });

  app.get("/api/tags/:slug/shows", async (req, res) => {
    try {
      const slug = req.params.slug;
      const shows = await query3<Show[]>(`
        SELECT s.title, s.image_url, s.total_episodes, s.rating, s.originality, s.time, s.series_type,
               (SELECT MIN(ry.release_year) 
                FROM release_years ry 
                JOIN show_release_years sry ON ry.year_id = sry.year_id 
                WHERE sry.show_id = s.show_id) as release_year
        FROM shows s
        JOIN show_tags st ON s.show_id = st.show_id
        JOIN tags t ON st.tag_id = t.tag_id
        WHERE t.tag_name = ?
      `, [slug]);
      res.json(shows);
    } catch (error) {
      console.error("Error fetching shows by tag:", error);
      res.status(500).json({ message: "Failed to fetch shows by tag" });
    }
  });

  app.get("/api/authors", async (_req, res) => {
    try {
      const authors = await query3<Author[]>("SELECT author_id, author_name FROM authors");
      res.json(authors);
    } catch (error) {
      console.error("Error fetching authors:", error);
      res.status(500).json({ message: "Failed to fetch authors" });
    }
  });

  app.get("/api/authors/:slug/shows", async (req, res) => {
    try {
      const slug = req.params.slug;
      const shows = await query3<Show[]>(`
        SELECT s.title, s.image_url, s.total_episodes, s.rating, s.originality, s.time, s.series_type,
               (SELECT MIN(ry.release_year) 
                FROM release_years ry 
                JOIN show_release_years sry ON ry.year_id = sry.year_id 
                WHERE sry.show_id = s.show_id) as release_year
        FROM shows s
        JOIN show_authors sa ON s.show_id = sa.show_id
        JOIN authors a ON sa.author_id = a.author_id
        WHERE a.author_name = ?
      `, [slug]);
      res.json(shows);
    } catch (error) {
      console.error("Error fetching shows by author:", error);
      res.status(500).json({ message: "Failed to fetch shows by author" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
