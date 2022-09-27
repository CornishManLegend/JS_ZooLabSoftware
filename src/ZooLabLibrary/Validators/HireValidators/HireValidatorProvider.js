// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Text;
// using System.Threading.Tasks;
// using ZooLabLibrary.Employees;
//
// namespace ZooLabLibrary.Validators.HireValidators
// {
//     public class HireValidatorProvider
//     {
//         private Zoo _zoo;
//         public HireValidatorProvider(Zoo zoo)
//         {
//             _zoo = zoo;
//         }
//         public IHireValidator GetHireValidator(IEmployee employee)
//         {
//             switch (employee)
//             {
//                 case ZooKeeper:
//                     return new ZooKeeperHireValidator(_zoo);
//                 case Veterinarian:
//                     return new VeterinarianHireValidator(_zoo);
//                 default:
//                     throw new ArgumentException("Undefined employee detected " + employee.GetType().Name);
//             }
//         }
//     }
// }
