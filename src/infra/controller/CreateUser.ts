import { Request, Response } from "express";
import { CreateUser } from "../../useCases/CreateUser";
import { IUsuario } from "../../domain/model/usuario";
import { UserRepository } from "../database/userRepository";


function makeCreateUser() {
  const dbConnection = {
    insertOne: (payload:IUsuario) => {
      console.log("db connection used")
    }
  }
  const userRepository = new UserRepository(dbConnection)
  return new CreateUser(userRepository);
}

class CreateUserController {
  handle(request: Request, response: Response) {
    try {
      

    const nome = request.body.nome;
    const email = request.body.email;
  
    if (!nome || !nome.length) {
      return response.status(400).json({ mensagem: "Nome inválido" });
    }
    if (!email || !email.length) {
      return response.status(400).json({ mensagem: "Email inválido" });
    }

    const createUser = makeCreateUser();
    createUser.execute({ nome, email });
    return response.status(201).json({ nome });
    } catch (error: any) {
      return response.status(500).json({mensagem: error.message})  
    }
  }
}

export { CreateUserController };
