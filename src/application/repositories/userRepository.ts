import { IUsuario, Usuario } from "../../domain/model/usuario"

export interface IUserRepository {
    dbConnection: any
    createUser: (payload: Usuario) => Promise<string>
}