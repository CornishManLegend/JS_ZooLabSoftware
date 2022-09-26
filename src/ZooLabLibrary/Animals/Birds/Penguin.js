// using ZooLabLibrary.Animals.Foods;
// using ZooLabLibrary.Animals.Medicines;
//
// namespace ZooLabLibrary.Animals.Birds
// {
//     public class Penguin : Bird
//     {
//         private static readonly string[] _friendlyAnimals = new string[]
//         {
//                 "Penguin",
//         };
//
//         public Penguin() { }
//         public Penguin(int iD) : base(iD) { }
//         public Penguin(int iD, bool isSick) : base(iD, isSick)
//         {
//             IsSick = isSick;
//         }
//
//         public Penguin(int iD, bool isSick, bool isHungry) : base(iD, isSick, isHungry)
//         {
//             IsSick = isSick;
//             IsHungry = isHungry;
//         }
//
//         public override int RequiredSpaceSqFt { get; } = 10;
//         public override string[] FavouriteFood { get; } = new string[] { "Vegetable", "Grass" };
//
//         public override bool IsSick { get; set; }
//
//
//
//         public override bool IsFriendlyWith(Animal animal)
//         {
//             return _friendlyAnimals.Contains(animal.GetType().Name);
//         }
//
//         public override void Feed(Food food)
//         {
//             if (IsHungry == true && FavouriteFood.Contains(food.FoodType))
//                 IsHungry = false;
//         }
//
//         public override void Heal(Medicine medicine)
//         {
//             if (this.IsSick == true && medicine.MedicineType == "AntiInflammatory")
//                 IsSick = false;
//         }
//     }
// }
import Medicine from '../../Medicines/Medicine';
import Food from '../../Foods/Food';
import Animal from '../Animal';
import Bird from './Bird';

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

