import { ObligatoryValueException } from "../../src/domain/errors/errors"
import { Usuario } from "../../src/domain/model/usuario"

describe("Test user", () => {
    it("should be able to create", () => {

        const payload = {"nome": "rafael", "email":"teste@teste.mail.com"}
        const user = Usuario.create(payload)
        expect(user.nome).toEqual(payload.nome)
        expect(user.email).toEqual(payload.email)
    })
    it("should not able to create if no user name", () => {
        const payload = {"nome": "", "email":"teste@teste.mail.com"}
        expect(() => Usuario.create(payload)).toThrow(ObligatoryValueException)
        expect(() => Usuario.create(payload)).toThrow("Nome é um campo obrigatório")
    })
    it("should not able to create if no user email", () => {
        const payload = {"nome": "asdf", "email":""}
        expect(() => Usuario.create(payload)).toThrow(ObligatoryValueException)
        expect(() => Usuario.create(payload)).toThrow("Email é um campo obrigatório")

    })
})