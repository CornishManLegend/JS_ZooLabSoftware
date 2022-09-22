// using ZooLabLibrary.Animals.Medicines;
// using ZooLabLibrary.Animals.Foods;
// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Text;
// using System.Threading.Tasks;
// using ZooLabLibrary.Animals.Birds;
//
// namespace ZooLabLibrary.Animals.Mammals
// {
//     public class Lion : Mammal
//     {
//         private static readonly string[] _friendlyAnimals = new string[]
//         {
//                 "Lion",
//         };
//
//         public Lion() { }
//         public Lion(int iD) : base(iD) { }
//         public Lion(int iD, bool isSick) : base(iD, isSick)
//         {
//             IsSick = isSick;
//         }
//
//         public Lion(int iD, bool isSick, bool isHungry) : base(iD, isSick, isHungry)
//         {
//             IsSick = isSick;
//             IsHungry = isHungry;
//         }
//
//         public override int RequiredSpaceSqFt { get; } = 1000;
//         public override string[] FavouriteFood { get; } = new string[] { "Meat" };
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
//
//     }
// }
