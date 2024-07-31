import { Request, Response, Router } from "express";
import { CreateUserController } from "../controller/CreateUser";

const router = Router();

router.get("/", (request: Request, response: Response) => {
  return response.json({ mensagem: "Bem vindo a nossa DIO API" });
});
const postUserController = new CreateUserController()
router.post("/usuarios", postUserController.handle);

export { router }
