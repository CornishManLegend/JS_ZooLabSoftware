import Zoo from '../../Zoo.js'
import Employee from '../../Employees/Employee.js'
import Veterinarian from '../../Employees/Veterinarian.js'
import ZooKeeper from '../../Employees/ZooKeeper.js'
import VeterinarianHireValidator from './VeterinarianHireValidator.js'
import ZooKeeperHireValidator from './ZooKeeperHireValidator.js'

export default class HireValidatorProvider {

    #zoo

    constructor(zoo) {
        if (zoo instanceof Zoo) {
            this.#zoo = zoo
        }
    }

    GetHireValidator(employee) {
        if (employee instanceof Employee) {
            if (employee instanceof ZooKeeper) {
                return new ZooKeeperHireValidator(this.#zoo)
            } else if (employee instanceof Veterinarian) {
                return new VeterinarianHireValidator(this.#zoo)
            }
        }
        throw new Error("Undefined employee detected " + employee.constructor.name);
    }
}
