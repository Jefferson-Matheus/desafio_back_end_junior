import {Client} from 'pg';

import dotenv from 'dotenv';

dotenv.config();

const postgresClient = new Client({
    user: process.env.USER_POSTGRES_NAME,
    password: process.env.USER_POSTGRES_PASSWORD,
    host: process.env.USER_POSTGRES_HOST,
    port: Number(process.env.USER_POSTGRES_PORT),
    database: process.env.USER_POSTGRES_DATABASE
});

export default postgresClient;