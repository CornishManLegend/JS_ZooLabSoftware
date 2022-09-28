import Medicine from '../../Medicines/Medicine.js';
import Food from '../../Foods/Food.js';
import Animal from '../Animal.js';
import Bird from './Bird.js';

export default class Penguin extends Bird {

    #friendlyAnimals = [
        "Penguin"
    ];

    favouriteFood = ["Vegetable", "Grass"];

    requiredSpaceSqFt = 10;

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
            if(this.IsSick === true && medicine.MedicineType === "AntiInflammatory")
                this.IsSick = false;
        }
    }
}

