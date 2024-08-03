import { pool } from "../../../infra/database/postgresConnection";
import { UserRepositoryDatabase } from "../../../infra/database/userRepository";
import { CreateUser } from "../../useCases/CreateUser";

export function makeCreateUser() {
    const userRepository = new UserRepositoryDatabase(pool);
    return new CreateUser(userRepository);
  }
  