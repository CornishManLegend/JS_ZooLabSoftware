import Zoo from '../../Zoo'
import Employee from '../../Employees/Employee'
import Veterinarian from '../../Employees/Veterinarian'
import ZooKeeper from '../../Employees/ZooKeeper'
import VeterinarianHireValidator from './VeterinarianHireValidator'
import ZooKeeperHireValidator from './ZooKeeperHireValidator'

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
