import {Client} from 'pg';

const postgresClient = new Client({
    user: 'postgres',
    password: 'admin',
    host: 'localhost',
    port: 5432
});

export default postgresClient;