import { Request, Response } from "express";
import { GetUsers } from "../../views/getUsers";
import { pool } from "../database/postgresConnection";




class GetUsersController {
    async handle(request: Request, response: Response){
        try{
            const getUsers = new GetUsers(pool);
            const usersList = await getUsers.execute();
            return response.status(200).json(usersList)
        }catch(e){
            console.error(e)
            return response.status(400).json({ mensagem: "Erro ao listar solicitações" });
        }
    }
}

export { GetUsersController}