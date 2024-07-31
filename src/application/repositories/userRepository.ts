import { IUsuario } from "../../domain/model/usuario"

export interface IUserRepository {
    dbConnection: any
    createUser: (payload: IUsuario) => void
}