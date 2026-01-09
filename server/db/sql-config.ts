import mysql from 'mysql2/promise';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const caCertPath = path.join(__dirname, '../certs/ca-certificate.crt');
let caCert: Buffer | undefined;
try {
  caCert = fs.readFileSync(caCertPath);
} catch (error) {
  console.warn("CA certificate not found, database connection might fail if SSL is required.");
}

export const dbConfig = {
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '14315'),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: caCert ? {
    ca: caCert,
    rejectUnauthorized: process.env.DB_SSL_REJECT_UNAUTHORIZED !== 'false'
  } : undefined
};

export const dbConfig2 = {
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '14315'),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME_2,
  ssl: caCert ? {
    ca: caCert,
    rejectUnauthorized: process.env.DB_SSL_REJECT_UNAUTHORIZED !== 'false'
  } : undefined
};

let pool: mysql.Pool | null = null;
let pool2: mysql.Pool | null = null;

export async function getConnection(): Promise<mysql.PoolConnection> {
  if (!pool) {
    pool = mysql.createPool({
      ...dbConfig,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });
  }
  return pool.getConnection();
}

export async function getConnection2(): Promise<mysql.PoolConnection> {
  if (!pool2) {
    pool2 = mysql.createPool({
      ...dbConfig2,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });
  }
  return pool2.getConnection();
}

export async function query<T>(sql: string, params?: any[]): Promise<T> {
  const connection = await getConnection();
  try {
    const [results] = await connection.execute(sql, params);
    return results as T;
  } finally {
    connection.release();
  }
}

export async function query2<T>(sql: string, params?: any[]): Promise<T> {
  const connection = await getConnection2();
  try {
    const [results] = await connection.execute(sql, params);
    return results as T;
  } finally {
    connection.release();
  }
}

export async function closePool(): Promise<void> {
  if (pool) {
    await pool.end();
    pool = null;
  }
  if (pool2) {
    await pool2.end();
    pool2 = null;
  }
}
