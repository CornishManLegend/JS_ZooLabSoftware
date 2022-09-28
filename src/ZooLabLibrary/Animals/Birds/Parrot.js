import Medicine from '../../Medicines/Medicine.js';
import Food from '../../Foods/Food.js';
import Animal from '../Animal.js';
import Bird from './Bird.js';

export default class Parrot extends Bird {

    #friendlyAnimals = [
        "Parrot",
        "Bison",
        "Elephant",
        "Turtle"
    ];

    favouriteFood = ["Vegetable"];

    requiredSpaceSqFt = 5;

    constructor({ iD, isSick, isHungry }) {
        super({ iD, isSick, isHungry });
    }

    IsFriendlyWith(animal){
        if(animal instanceof Animal){
            return this.#friendlyAnimals.includes(animal.constructor.name)
        }
    }

    Feed(food) {
        if(food instanceof Food){
            if(this.IsHungry === true && this.FavouriteFood.includes(food.FoodType))
                this.IsHungry = false;
        }
    }

    Heal(medicine) {
        if(medicine instanceof Medicine){
            if(this.IsSick === true && medicine.MedicineType === "AntiDepression")
                this.IsSick = false;
        }
    }
}
