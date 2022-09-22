// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Text;
// using System.Threading.Tasks;
// using ZooLabLibrary.Animals.Foods;
// using ZooLabLibrary.Animals.Medicines;
//
// namespace ZooLabLibrary.Animals.Reptiles
// {
//     public class Turtle : Reptile
//     {
//         private static readonly string[] _friendlyAnimals = new string[]
// {
//                 "Turtle",
//                 "Parrot",
//                 "Bison",
//                 "Elephant",
//                 "Turtle"
// };
//
//         public Turtle() { }
//         public Turtle(int iD) : base(iD) { }
//         public Turtle(int iD, bool isSick) : base(iD, isSick)
//         {
//             IsSick = isSick;
//         }
//
//         public Turtle(int iD, bool isSick, bool isHungry) : base(iD, isSick, isHungry)
//         {
//             IsSick = isSick;
//             IsHungry = isHungry;
//         }
//
//         public override int RequiredSpaceSqFt { get; } = 5;
//         public override string[] FavouriteFood { get; } = new string[] { "Vegetable" };
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
//             if (this.IsSick == true && medicine.MedicineType == "Antibiotics")
//                 IsSick = false;
//         }
//     }
// }
