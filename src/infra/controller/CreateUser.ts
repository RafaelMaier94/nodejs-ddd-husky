import { Request, Response } from "express";
import { ICreateUser } from "../../application/useCases/CreateUser";


class CreateUserController {
  createUser
  constructor(createUser: ICreateUser) {
    this.createUser = createUser
  }
  async handle(request: Request, response: Response) {
    try {
      const nome = request.body.nome;
      const email = request.body.email;
      const output = await this.createUser.execute({ nome, email });
      return response.status(201).json({ id: output});
    } catch (error: any) {
      return response.status(500).json({ mensagem: error.message });
    }
  }
}

export { CreateUserController };
