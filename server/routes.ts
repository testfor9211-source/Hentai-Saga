import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { query, query2 } from "./db/sql-config";
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
      "INSERT INTO ban_users (ip_address) VALUES (?)",
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

  const httpServer = createServer(app);

  return httpServer;
}
