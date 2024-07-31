import { IUserRepository } from "../application/repositories/userRepository";
import { IUsuario } from "../domain/model/usuario";

class CreateUser {
  userRepository;
  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }
  execute({ nome, email }: IUsuario) {
    const data = [];

    data.push({ nome, email });
    this.userRepository.createUser({ nome, email })
    // Imagine something with connection here
    return data;
  }
}

export { CreateUser };
