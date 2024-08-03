import { IUsuario } from "../../domain/model/usuario";
import { IUserRepository } from "../repositories/userRepository";

export interface ICreateUser {
  userRepository: IUserRepository
  execute: ({ nome, email }: IUsuario) => Promise<string>
}

class CreateUser implements ICreateUser {
  userRepository;
  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }
  async execute({ nome, email }: IUsuario) {
    return await this.userRepository.createUser({ nome, email })
  }
}

export { CreateUser };
