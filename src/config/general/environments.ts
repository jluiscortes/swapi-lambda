import "dotenv/config";

export const ENV = process.env.ENV! || "dev";
export const PORT = process.env.PORT! || 8080;
export const HOST = process.env.HOST! || "localhost";
export const DB_HOST = process.env.DB_HOST! || "localhost";
export const DB_USER = process.env.DB_USER! || "root";
export const DB_PASSWORD = process.env.DB_PASSWORD! || "";
export const DB_NAME = process.env.DB_NAME! || "test";
