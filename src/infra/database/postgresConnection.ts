import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: "127.0.0.1",
  port: 5432,
  database: "test_db",
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export { pool }
