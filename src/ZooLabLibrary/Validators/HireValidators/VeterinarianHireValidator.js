import HireValidator from './HireValidator.js'
import Zoo from '../../Zoo.js'
import Veterinarian from '../../Employees/Veterinarian.js'
import Animal from '../../Animals/Animal.js'

export default class VeterinarianHireValidator extends HireValidator {

    #zoo;

    constructor(zoo) {
        super();
        if (zoo instanceof Zoo){
            this.#zoo = zoo;
        }
    }

    ValidateEmployee(employee){
        let errors = []
        if (employee instanceof Veterinarian) {
            this.#zoo.Enclosures.forEach((enclosure)=>{
                enclosure.Animals.forEach((animal)=>{
                    if(animal instanceof Animal) {
                        if (!employee.HasAnimalExperience(animal)) {
                            errors.push('Veterinarian ' + employee.ToString()
                                + ' has no experience with ' + animal.constructor.name + ' ' + animal.ID)
                        }
                    }
                })
            })
        }
        return errors;
    }
}
