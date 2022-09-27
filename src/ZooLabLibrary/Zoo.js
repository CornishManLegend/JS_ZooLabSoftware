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
import Logger from '../ZooLabLibrary/Logger'
import Enclosure from './Enclosures/Enclosure'
import Animal from './Animals/Animal'
import NoAvailableEnclosureException from './Exceptions/NoAvailableEnclosureException'
import HireValidatorProvider from './Validators/HireValidators/HireValidatorProvider'
import NoNeededExperienceException from './Exceptions/NoNeededExperienceException'
import ZooKeeper from './Employees/ZooKeeper'
import Veterinarian from './Employees/Veterinarian'
import Employee from './Employees/Employee'

export default class Zoo {

    #Enclosures = []
    #Employees = []
    #Location
    #hireValidatorProvider

    constructor({ location }) {
        this.#Location = location
        this.#hireValidatorProvider = new HireValidatorProvider(this)
        Logger.writeLine('New zoo was created in ' + location)
    }

    AddEnclosure(enclosure) {
        if (enclosure instanceof Enclosure) {
            this.Enclosures.push(enclosure)
            Logger.writeLine('New Enclosure added: ' + enclosure.Name + ' to zoo in ' + enclosure.ParentZoo.Location)
        }
    }

    FindAvailableEnclosure(animal) {
        let availableEnclosure = null
        if (animal instanceof Animal) {
            this.Enclosures.forEach((enclosure) => {
                let enclosuresSquareFeet = enclosure.SquareFeet
                enclosure.Animals.forEach((enclosuresAnimal) => {
                    if (enclosuresAnimal instanceof Animal) {
                        if (enclosuresAnimal.IsFriendlyWith(animal) && animal.IsFriendlyWith(enclosuresAnimal))
                            enclosuresSquareFeet -= enclosuresAnimal.RequiredSpaceSqFt
                        else
                            enclosuresSquareFeet = 0
                    }
                })
                if (enclosuresSquareFeet >= animal.RequiredSpaceSqFt)
                    availableEnclosure = enclosure
            })
        }
        if (availableEnclosure !== null) {
            return availableEnclosure
        } else
            throw new NoAvailableEnclosureException()
    }

    HireEmployee(employee) {
        if (employee instanceof Employee) {
            if (this.#hireValidatorProvider.GetHireValidator(employee).ValidateEmployee(employee).length === 0) {
                this.Employees.push(employee)
                Logger.writeLine('New Employee added: ' + employee.ToString() + ' in zoo ' + this.#Location)
            } else {
                throw new NoNeededExperienceException()
            }
        }
    }

    FeedAnimals() {
        let zooKeepers = []
        this.Employees.forEach((employee) => {
            if (employee instanceof ZooKeeper) {
                zooKeepers.push(employee)
            }

            if (zooKeepers.length > 0) {
                let zookeeperIndex = 0
                this.Enclosures.forEach((enclosure) => {
                    enclosure.Animals.forEach((enclosureAnimal) => {
                        zooKeepers[zookeeperIndex].FeedAnimal(enclosureAnimal)
                        Logger.writeLine('The ' + enclosureAnimal.constructor.name + ' ' + enclosureAnimal.ID + ' in zoo ' + this.Location
                            + ' was fed by zooKeeper ' + zooKeepers[zookeeperIndex].ToString())
                        zookeeperIndex++
                        if (zookeeperIndex >= zooKeepers.length) {
                            zookeeperIndex = 0
                        }
                    })
                })
            }
        })
    }

    HealAnimals() {
        let veterinarians = []
        this.Employees.forEach((employee) => {
            if (employee instanceof Veterinarian) {
                veterinarians.push(employee)
            }

            if (veterinarians.length > 0) {
                let veterinariansIndex = 0
                this.Enclosures.forEach((enclosure) => {
                    enclosure.Animals.forEach((enclosureAnimal) => {
                        veterinarians[veterinariansIndex].HealAnimal(enclosureAnimal)
                        Logger.writeLine('The ' + enclosureAnimal.constructor.name + ' ' + enclosureAnimal.ID + ' in zoo ' + this.Location
                            + ' was healed by veterinarian ' + veterinarians[veterinariansIndex].ToString())
                        veterinariansIndex++
                        if (veterinariansIndex >= veterinarians.length) {
                            veterinariansIndex = 0
                        }
                    })
                })
            }
        })
    }


    get Enclosures() {
        return this.#Enclosures
    }

    get Employees() {
        return this.#Employees
    }

    get Location() {
        return this.#Location
    }
}
