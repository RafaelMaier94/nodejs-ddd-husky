import { Client, Pool } from "pg";

class GetUsers {
  dbConnection;
  constructor(dbConnection: Pool | Client) {
    this.dbConnection = dbConnection;
  }
  async execute() {
    const response = await this.dbConnection.query("SELECT * FROM users");
    return response.rows
  }
}

export { GetUsers };
