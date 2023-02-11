import dotenv from 'dotenv';

dotenv.config();
export const testEnvironmentVariable = process.env.TEST_ENV_VARIABLE;
export const testVariable = process.env.TEST_ENV_VARIABLE2;

export const dbHost = process.env.MARIADB_HOST;
export const dbUser = process.env.MARIADB_USER;
export const dbPassword = process.env.MARIADB_PASSWORD;
export const dbDatabase = process.env.MARIADB_DB;
