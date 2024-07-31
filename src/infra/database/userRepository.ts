import { IUserRepository } from "../../application/repositories/userRepository";
import { IUsuario } from "../../domain/model/usuario";

class UserRepository implements IUserRepository {
  dbConnection: any;
  constructor(dbConnection: any) {
    this.dbConnection = dbConnection;
  }
  createUser(payload: IUsuario) {
    this.dbConnection.insertOne({ payload });
    throw new Error("db error")
    console.log(`nome: ${payload.nome}, email:  ${payload.email} saved`);
  }
}

export { UserRepository };
