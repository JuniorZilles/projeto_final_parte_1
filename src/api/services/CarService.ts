import { InvalidField } from '@errors/InvalidField'
import { Accessory, Car } from '@models/CarModel'
import CarRepository from '@repositories/CarRepository'
class CarService {

    async create(payload: Car) {
        this.isValidAccessories(payload.acessorios)

        this.isValidYear(payload.ano)
        
        payload.acessorios = this.deDuplicate(payload.acessorios)

        return await CarRepository.create(payload)
    }

    private isValidAccessories(acessories:Accessory[]){
        if (acessories.length == 0) {
            throw new InvalidField('acessorios')
        }
    }

    private isValidYear(year:Number){
        if (year < 1950 || year > 2022) {
            throw new InvalidField('ano')
        }
    }

    deDuplicate(list: Accessory[]): Accessory[] {
        return list.filter((elem, index, arr) => arr.findIndex((t) => (
            t.descricao === elem.descricao)) === index)
    }

    getById() { }

    async list(payload:Object, start:number = 0, size:number=10) {
        return await CarRepository.findAll(payload, start, size)
    }

    delete() { }

    update() { }
}

export default new CarService()