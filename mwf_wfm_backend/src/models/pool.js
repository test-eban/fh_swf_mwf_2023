import {
    createPool
} from 'mariadb';
import dotenv from 'dotenv';
import {
    dbHost, dbUser, dbPassword, dbDatabase
} from '../settings.js';
dotenv.config();

export const pool = createPool({
    connectionLimit: 10,
    host: dbHost,
    user: dbUser,
    password: dbPassword,
    database: dbDatabase,
});
