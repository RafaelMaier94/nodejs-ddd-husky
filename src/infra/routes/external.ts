import { Request, Response, Router } from "express";
import { GetUsersController } from "../controller/GetUsers";
import { makeCreateUserController } from "../../application/factories/controller/createUserController";

const router = Router();

router.get("/", (request: Request, response: Response) => {
  return response.json({ mensagem: "Bem vindo a nossa DIO API" });
});

const postUserController = makeCreateUserController()
router.post("/usuarios", (request, response) => postUserController.handle(request, response));

const getUsersController = new GetUsersController()
router.get("/usuarios", getUsersController.handle);

export { router }
