import Logger from '../ZooLabLibrary/Logger.js'
import Enclosure from './Enclosures/Enclosure.js'
import Animal from './Animals/Animal.js'
import NoAvailableEnclosureException from './Exceptions/NoAvailableEnclosureException.js'
import HireValidatorProvider from './Validators/HireValidators/HireValidatorProvider.js'
import NoNeededExperienceException from './Exceptions/NoNeededExperienceException.js'
import ZooKeeper from './Employees/ZooKeeper.js'
import Veterinarian from './Employees/Veterinarian.js'
import Employee from './Employees/Employee.js'

export default class Zoo {

    #Enclosures = []
    #Employees = []
    #Location
    #hireValidatorProvider

    constructor({ location }) {
        this.#Location = location
        this.#hireValidatorProvider = new HireValidatorProvider(this)
        Logger.writeLine('New zoo was created in ' + location)
    }

    AddEnclosure(enclosure) {
        if (enclosure instanceof Enclosure) {
            this.Enclosures.push(enclosure)
            Logger.writeLine('New Enclosure added: ' + enclosure.Name + ' to zoo in ' + enclosure.ParentZoo.Location)
        }
    }

    FindAvailableEnclosure(animal) {
        let availableEnclosure = null
        if (animal instanceof Animal) {
            this.Enclosures.forEach((enclosure) => {
                let enclosuresSquareFeet = enclosure.SquareFeet
                enclosure.Animals.forEach((enclosuresAnimal) => {
                    if (enclosuresAnimal instanceof Animal) {
                        if (enclosuresAnimal.IsFriendlyWith(animal) && animal.IsFriendlyWith(enclosuresAnimal))
                            enclosuresSquareFeet -= enclosuresAnimal.RequiredSpaceSqFt
                        else
                            enclosuresSquareFeet = 0
                    }
                })
                if (enclosuresSquareFeet >= animal.RequiredSpaceSqFt)
                    availableEnclosure = enclosure
            })
        }
        if (availableEnclosure !== null) {
            return availableEnclosure
        } else
            throw new NoAvailableEnclosureException()
    }

    HireEmployee(employee) {
        if (employee instanceof Employee) {
            if (this.#hireValidatorProvider.GetHireValidator(employee).ValidateEmployee(employee).length === 0) {
                this.Employees.push(employee)
                Logger.writeLine('New Employee added: ' + employee.ToString() + ' in zoo ' + this.#Location)
            } else {
                throw new NoNeededExperienceException()
            }
        }
    }

    FeedAnimals() {
        let zooKeepers = []
        this.Employees.forEach((employee) => {
            if (employee instanceof ZooKeeper) {
                zooKeepers.push(employee)
            }

            if (zooKeepers.length > 0) {
                let zookeeperIndex = 0
                this.Enclosures.forEach((enclosure) => {
                    enclosure.Animals.forEach((enclosureAnimal) => {
                        zooKeepers[zookeeperIndex].FeedAnimal(enclosureAnimal)
                        Logger.writeLine('The ' + enclosureAnimal.constructor.name + ' ' + enclosureAnimal.ID + ' in zoo ' + this.Location
                            + ' was fed by zooKeeper ' + zooKeepers[zookeeperIndex].ToString())
                        zookeeperIndex++
                        if (zookeeperIndex >= zooKeepers.length) {
                            zookeeperIndex = 0
                        }
                    })
                })
            }
        })
    }

    HealAnimals() {
        let veterinarians = []
        this.Employees.forEach((employee) => {
            if (employee instanceof Veterinarian) {
                veterinarians.push(employee)
            }

            if (veterinarians.length > 0) {
                let veterinariansIndex = 0
                this.Enclosures.forEach((enclosure) => {
                    enclosure.Animals.forEach((enclosureAnimal) => {
                        veterinarians[veterinariansIndex].HealAnimal(enclosureAnimal)
                        Logger.writeLine('The ' + enclosureAnimal.constructor.name + ' ' + enclosureAnimal.ID + ' in zoo ' + this.Location
                            + ' was healed by veterinarian ' + veterinarians[veterinariansIndex].ToString())
                        veterinariansIndex++
                        if (veterinariansIndex >= veterinarians.length) {
                            veterinariansIndex = 0
                        }
                    })
                })
            }
        })
    }


    get Enclosures() {
        return this.#Enclosures
    }

    get Employees() {
        return this.#Employees
    }

    get Location() {
        return this.#Location
    }
}
