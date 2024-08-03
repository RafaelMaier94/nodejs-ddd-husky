import { CreateUserController } from "../../../infra/controller/CreateUser";
import { makeCreateUser } from "../useCases/createUser";

export function makeCreateUserController() {
    const createUser = makeCreateUser()
    return new CreateUserController(createUser);
  }
  