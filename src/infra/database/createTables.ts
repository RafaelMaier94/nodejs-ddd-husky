import { Client, Pool } from "pg";

export async function createUserTable(client: Client | Pool) {
    const sql = "CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY , name VARCHAR NOT NULL, email VARCHAR NOT NULL)";
    await client.query(sql);
}