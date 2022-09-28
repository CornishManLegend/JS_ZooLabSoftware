import Animal from '../Animals/Animal.js'
import Logger from '../Logger.js'
import Zoo from '../Zoo.js'
import NoAvailableSpaceException from '../Exceptions/NoAvailableSpaceException.js'
import NotFriendlyAnimalException from '../Exceptions/NotFriendlyAnimalException.js'

export default class Enclosure {

    #Name
    #Animals = []
    #ParentZoo
    #SquareFeet

    constructor({ name, animals, parentZoo, squareFeet }) {
        this.#Name = name
        this.#Animals = animals
        if (parentZoo instanceof Zoo) {
            this.#ParentZoo = parentZoo
        }
        this.#SquareFeet = squareFeet
    }

    AddAnimals(animal) {
        if (animal instanceof Animal) {
            if (!this.IsFriendlyToEnclosureAnimals(animal))
                throw new NotFriendlyAnimalException();

            if (animal.RequiredSpaceSqFt > this.GetAvailableSquareFeet()) {
                throw new NoAvailableSpaceException()
            }
            this.#Animals.push(animal)
            Logger.writeLine('New ' + animal.constructor.name + ' ' + animal.ID + ' added to enclosure ' + this.Name + ' in zoo ' + this.ParentZoo.Location)
        }
    }

    GetAvailableSquareFeet() {
        let availableSquareFeet = this.SquareFeet
        this.Animals.forEach((animal) => {
            if (animal instanceof Animal) {
                availableSquareFeet -= animal.RequiredSpaceSqFt
            }
        })
        return availableSquareFeet
    }

    IsFriendlyToEnclosureAnimals(animal) {
        if (animal instanceof Animal) {
            this.Animals.forEach((enclosuresAnimal) => {
                if (enclosuresAnimal instanceof Animal) {
                    if (!animal.IsFriendlyWith(enclosuresAnimal)) {
                        return false
                    }

                    if (!enclosuresAnimal.IsFriendlyWith(animal)) {
                        return false
                    }
                }
            })
            return true
        }
        return false
    }

    get Name() {
        return this.#Name
    }

    get Animals() {
        return this.#Animals
    }

    get ParentZoo() {
        return this.#ParentZoo
    }

    get SquareFeet() {
        return this.#SquareFeet
    }
}





