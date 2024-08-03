import { Client, Pool } from "pg";
import { IUserRepository } from "../../application/repositories/userRepository";
import { Usuario } from "../../domain/model/usuario";

class UserRepositoryDatabase implements IUserRepository {
  dbConnection: Pool | Client;
  constructor(dbConnection: Pool | Client) {
    this.dbConnection = dbConnection;
  }
  async createUser(payload: Usuario) {
    try {
      await this.dbConnection.query('BEGIN')
      const queryText = 'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id'
      const res = await this.dbConnection.query(queryText, [payload.nome, payload.email])
      await this.dbConnection.query('COMMIT');
      return res.rows[0].id
    } catch (e) {
      await this.dbConnection.query('ROLLBACK')
      throw e
    } 
  }
}

export { UserRepositoryDatabase };
