// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Text;
// using System.Threading.Tasks;
// using ZooLabLibrary.Employees;
//
// namespace ZooLabLibrary.Validators.HireValidators
// {
//     public class ZooKeeperHireValidator : HireValidator, IHireValidator
//     {
//         private Zoo _zoo;
//         public ZooKeeperHireValidator(Zoo zoo)
//         {
//             _zoo = zoo;
//         }
//         public override List<string> ValidateEmployee(IEmployee employee)
//         {
//             var errors = new List<string>();
//
//             if (employee is ZooKeeper zooKeeper)
//             {
//                 foreach (var enclosure in _zoo.Enclosures)
//                 {
//                     foreach (var animal in enclosure.Animals)
//                     {
//                         if (!zooKeeper.HasAnimalExperience(animal))
//                         {
//                             errors.Add("Veterinarian " + zooKeeper.FirstName + " " + zooKeeper.LastName
//                                 + " has no experience with " + animal.GetType().Name + " " + animal.ID);
//                         }
//                     }
//                 }
//             }
//             return errors;
//         }
//     }
// }
