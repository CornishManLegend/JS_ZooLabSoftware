import Animal from '../Animals/Animal'

export default class Employee {
    #FirstName
    #LastName
    #AnimalExperiences = []

    constructor({ firstName, lastName, animalExperiences }) {
        if (this.constructor.name === 'Employee') {
            throw new Error(`Can not create instance of abstract class - ${this.constructor.name}`)
        }
        this.#FirstName = firstName
        this.#LastName = lastName
        this.#AnimalExperiences = animalExperiences
    }

    get FirstName() {
        return this.#FirstName
    }

    set FirstName(firstName) {
        this.#FirstName = firstName
    }

    get LastName() {
        return this.#LastName
    }

    set LastName(lastName) {
        this.#LastName = lastName
    }

    get AnimalExperiences() {
        return this.#AnimalExperiences
    }

    HasAnimalExperience(animal) {
        const listAnimalNames = []
        this.AnimalExperiences.forEach((item) => {
            if (item instanceof Animal) {
                listAnimalNames.push(item.constructor.name)
            }
        })
        if (animal instanceof Animal) {
            if (listAnimalNames.indexOf(animal.constructor.name) !== -1)
                return true
        }
        return false
    }

    ToString() {
        return this.FirstName + ' ' + this.LastName
    }
}