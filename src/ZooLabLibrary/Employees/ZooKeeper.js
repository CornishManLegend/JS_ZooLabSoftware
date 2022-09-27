import Employee from './Employee';
import Logger from '../Logger';
import Animal from '../Animals/Animal';

export default class ZooKeeper extends Employee {
    constructor({ firstName, lastName, animalExperiences }) {
        super({ firstName, lastName, animalExperiences })
        Logger.writeLine('New ZooKeeper created ' + this.ToString())
    }

    FeedAnimal(animal) {
        if (animal instanceof Animal) {
            if (animal.IsHungry && this.HasAnimalExperience(animal)){
                animal.IsHungry = false;
                // Logger.WriteLine("The " + animal.constructor.prototype.name + " " + animal.ID
                //    + " was healed by Veterinarian " + this.ToString());
                return true;
            }
        }
        return false;
    }

}