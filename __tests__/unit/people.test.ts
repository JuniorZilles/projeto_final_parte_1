import { InvalidField } from "@errors/InvalidField"
import PersonModel from "@models/PersonModel"
import PeopleService from "@services/PeopleService"
import MongoDatabase from "../../src/infra/mongo/index"

MongoDatabase.connect()

const personData = { 
    nome: "joaozinho ciclano", 
    cpf: "131.147.860-49", 
    data_nascimento: "03/03/2000", 
    email: "joazinho@email.com", 
    senha: "123456", 
    habilitado: "sim" 
}
describe("src :: api :: services :: people", ()=>{
    beforeAll(async () => {
        await PersonModel.deleteMany()
    })
    afterAll(async () => {
        await MongoDatabase.disconect()
    })
    afterEach(async () => {
        await PersonModel.deleteMany()
    })

    /**
     * POST CREATE
     */

    it("should create a person", async ()=>{
        const person = await PeopleService.create(personData)
        expect(person.id).toBeDefined()
        expect(person.dataCriacao).toBeDefined()
        expect(person.cpf).toBe(personData.cpf)
        expect(person.data_nascimento).toEqual(new Date(personData.data_nascimento))
        expect(person.email).toBe(personData.email)
        expect(person.nome).toBe(personData.nome)
        expect(person.habilitado).toBe(personData.habilitado)
        
    })

    it("should not create a person if data_nascimento is less tan 18 years", async ()=>{
        const temp = { 
            nome: "joaozinho ciclano", 
            cpf: "131.147.860-49", 
            data_nascimento: "03/03/2021", 
            email: "joazinho@email.com", 
            senha: "123456", 
            habilitado: "sim" 
        }
        try{
            const person = await PeopleService.create(temp)
        } catch (e) {
            expect(e).toBeInstanceOf(InvalidField)
            expect((<InvalidField>e).message).toBe("O campo 'data_nascimento' está fora do formato padrão")
        }
    })

    /**
     * GET LIST
     */

    /**
     * GET BY ID
     */

    /**
     * DELETE BY ID
     */

    /**
     * PUT BY ID
     */
})