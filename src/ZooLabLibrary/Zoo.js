// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Text;
// using System.Threading.Tasks;
// using ZooLab.Animals;
// using ZooLabLibrary.Animals;
// using ZooLabLibrary.Console;
// using ZooLabLibrary.Employees;
// using ZooLabLibrary.Enclosures;
// using ZooLabLibrary.Exceptions;
// using ZooLabLibrary.Validators.HireValidators;
//
// namespace ZooLabLibrary
// {
//     public class Zoo
//     {
//
//         public IConsole Console { get; set; } = new DefaultConsole();
//
//         private HireValidatorProvider _hireValidatorProvider;
//
//         public List<Enclosure> Enclosures { get; private set; }
//
//         public List<IEmployee> Employees { get; private set; }
//
//         public string Location { get; private set; }
//
//         public Zoo(string location)
//         {
//             Location = location;
//             Enclosures = new List<Enclosure>();
//             Employees = new List<IEmployee>();
//             _hireValidatorProvider = new HireValidatorProvider(this);
//         }
//
//         public void AddEnclosure(Enclosure enclosure)
//         {
//             Enclosures.Add(enclosure);
//
//             Console.WriteLine("New Enclosure added: " + enclosure.Name + " to zoo in " + enclosure.ParentZoo.Location);
//         }
//
//
//         public Enclosure FindAvailableEnclosure(Animal animal)
//         {
//             foreach (var enclosure in Enclosures)
//             {
//                 var enclosuresSquareFeet = enclosure.SquareFeet;
//
//                 foreach (var enclosuresAnimal in enclosure.Animals)
//                 {
//                     if(enclosuresAnimal.IsFriendlyWith(animal) && animal.IsFriendlyWith(enclosuresAnimal))
//                         enclosuresSquareFeet -= enclosuresAnimal.RequiredSpaceSqFt;
//                     else
//                         enclosuresSquareFeet = 0;
//                 }
//
//                 if (enclosuresSquareFeet >= animal.RequiredSpaceSqFt)
//                     return enclosure;
//             }
//             throw new NoAvailableEnclosureException("There is no available enclosure in the zoo "
//             + Location + " for the animal " + animal.GetType().Name + " " + animal.ID);
//         }
//
//
//         public void HireEmployee(IEmployee employee)
//         {
//             if (_hireValidatorProvider.GetHireValidator(employee).ValidateEmployee(employee).Count == 0)
//             {
//                 Employees.Add(employee);
//
//                 Console.WriteLine("New Employee added: " + employee.FirstName + " " + employee.LastName + " in zoo " + Location);
//             }
//             else
//             {
//                 throw new NoNeededExperienceException("The employee " + employee.FirstName + " " + employee.LastName + " is not needed due to lack of experience");
//             }
//
//         }
//
//
//         public void FeedAnimals()
//         {
//             var zooKeepers = new List<ZooKeeper>();
//             foreach(var employee in Employees)
//             {
//                 if(employee is ZooKeeper zooKeeper)
//                 {
//                     zooKeepers.Add(zooKeeper);
//                 }
//             }
//
//             if (zooKeepers.Count > 0)
//             {
//                 int zookeeperIndex = 0;
//                 foreach (var enclosure in Enclosures)
//                 {
//                     foreach (var enclosureAnimal in enclosure.Animals)
//                     {
//                         zooKeepers[zookeeperIndex].FeedAnimal(enclosureAnimal);
//                         Console.WriteLine("The " + enclosureAnimal.GetType().Name + " " + enclosureAnimal.ID + " in zoo " + Location
//                             + " was fed by zooKeeper " + zooKeepers[zookeeperIndex].ToString());
//                         zookeeperIndex++;
//                         if (zookeeperIndex >= zooKeepers.Count)
//                         {
//                             zookeeperIndex = 0;
//                         }
//                     }
//                 }
//             }
//         }
//
//
//         public void HealAnimals()
//         {
//             var veterinarians = new List<Veterinarian>();
//             foreach (var employee in Employees)
//             {
//                 if (employee is Veterinarian veterinarian)
//                 {
//                     veterinarians.Add(veterinarian);
//                 }
//             }
//
//             if (veterinarians.Count > 0)
//             {
//
//                 int veterinarianIndex = 0;
//                 foreach (var enclosure in Enclosures)
//                 {
//                     foreach (var enclosureAnimal in enclosure.Animals)
//                     {
//
//                         veterinarians[veterinarianIndex].HealAnimal(enclosureAnimal);
//                         Console.WriteLine("The " + enclosureAnimal.GetType().Name + " " + enclosureAnimal.ID + " in zoo " + Location
//                             + " was healed by Veterinarian " + veterinarians[veterinarianIndex].ToString());
//                         veterinarianIndex++;
//                         if (veterinarianIndex >= veterinarians.Count)
//                         {
//                             veterinarianIndex = 0;
//                         }
//                     }
//                 }
//             }
//         }
//
//
//     }
// }
import Logger from '../ZooLabLibrary/Logger';

export default class Zoo {

    #Enclosures = [];
    #Employees = [];
    #Location;

    constructor({ location }) {
        this.#Location = location;
        Logger.writeLine("New zoo was created in " + location);
    }

    get Enclosures() {
        return this.#Enclosures;
    }

    get Employees() {
        return this.#Employees;
    }

    get Location() {
        return this.#Location;
    }
}
