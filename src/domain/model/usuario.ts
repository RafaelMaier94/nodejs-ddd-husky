import { ObligatoryValueException } from "../errors/errors";

export interface IUsuario {
    id?: string;
    nome: string;
    email: string;
}

class Usuario implements IUsuario {
    id?: string;
    nome: string;
    email: string;
    constructor({id, nome, email}: IUsuario){
        this.id = id
        this.nome = nome
        this.email = email
    }

    static create({nome, email}: IUsuario): Usuario{
        if(!nome){
            throw new ObligatoryValueException("Nome é um campo obrigatório")
        }
        if(!email){
            throw new ObligatoryValueException("Email é um campo obrigatório")            
        }
        return new Usuario({nome, email});
    }

    static restore({id, nome, email}: IUsuario): Usuario{
        return new Usuario({id, nome, email});
    }

}

export { Usuario }