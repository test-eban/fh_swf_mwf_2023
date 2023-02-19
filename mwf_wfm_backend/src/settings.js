import dotenv from 'dotenv';

dotenv.config();

export const dbHost = process.env.MARIADB_HOST;
export const dbUser = process.env.MARIADB_USER;
export const dbPassword = process.env.MARIADB_PASSWORD;
export const dbDatabase = process.env.MARIADB_DB;

export const port = process.env.PORT;
