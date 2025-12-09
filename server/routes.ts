import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { query } from "./db/sql-config";
import bcrypt from "bcrypt";

interface AdminUser {
  id: number;
  username: string;
  password_hash: string;
}

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/admin/login", async (req, res) => {
    try {
      const { username, password } = req.body;

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
        return res.status(401).json({ 
          success: false, 
          message: "Wrong password or username, you are most probably not a admin. Do not try to login here, this area reserve to Admin only." 
        });
      }

      const user = users[0];
      const passwordMatch = await bcrypt.compare(password, user.password_hash);

      if (!passwordMatch) {
        return res.status(401).json({ 
          success: false, 
          message: "Wrong password or username, you are most probably not a admin. Do not try to login here, this area reserve to Admin only." 
        });
      }

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

  const httpServer = createServer(app);

  return httpServer;
}
