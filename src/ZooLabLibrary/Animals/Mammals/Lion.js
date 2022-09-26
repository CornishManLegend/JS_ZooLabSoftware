﻿import Medicine from '../../Medicines/Medicine';
import Food from '../../Foods/Food';
import Animal from '../Animal';
import Mammal from './Mammal';

export default class Lion extends Mammal {

    #friendlyAnimals = [
        "Lion"
    ];

    favouriteFood = ["Meat"];

    requiredSpaceSqFt = 1000;

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
            if(this.IsSick === true && medicine.MedicineType === "Antibiotics")
                this.IsSick = false;
        }
    }
}
