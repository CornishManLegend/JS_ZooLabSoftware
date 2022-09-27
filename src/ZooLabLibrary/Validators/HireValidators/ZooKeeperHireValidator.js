import HireValidator from './HireValidator'
import Zoo from '../../Zoo'
import Animal from '../../Animals/Animal'
import ZooKeeper from '../../Employees/ZooKeeper'

export default class ZooKeeperHireValidator extends HireValidator {

    #zoo;

    constructor(zoo) {
        super();
        if (zoo instanceof Zoo){
            this.#zoo = zoo;
        }
    }

    ValidateEmployee(employee){
        let errors = []
        if (employee instanceof ZooKeeper) {
            this.#zoo.Enclosures.forEach((enclosure)=>{
                enclosure.Animals.forEach((animal)=>{
                    if(animal instanceof Animal) {
                        if (!employee.HasAnimalExperience(animal)) {
                            errors.push('ZooKeeper ' + employee.ToString()
                                + ' has no experience with ' + animal.constructor.name + ' ' + animal.ID)
                        }
                    }
                })
            })
        }
        return errors;
    }
}