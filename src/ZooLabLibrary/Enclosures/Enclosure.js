// using ZooLabLibrary.Animals;
// using ZooLabLibrary.Console;
// using ZooLabLibrary.Exceptions;
//
//
// namespace ZooLabLibrary.Enclosures
// {
//     public class Enclosure
//     {
//         public string Name { get; private set; }
//
//         public List<Animal> Animals { get; private set; }
//
//         public Zoo ParentZoo { get; private set; }
//
//         public int SquareFeet { get; private set; }
//
//         public IConsole Console { get; set; } = new DefaultConsole();
//
//         public Enclosure(string name, List<Animal> animals, Zoo parentZoo, int squareFeet)
//         {
//             Name = name;
//             Animals = animals;
//             ParentZoo = parentZoo;
//             SquareFeet = squareFeet;
//         }
//
//         public Enclosure(string name, Zoo parentZoo, int squareFeet)
//         {
//             Name = name;
//             Animals = new List<Animal>();
//             ParentZoo = parentZoo;
//             SquareFeet = squareFeet;
//         }
//
//         public void AddAnimals(Animal animal)
//         {
//             if (animal.RequiredSpaceSqFt > this.GetAvailableSquareFeet())
//                 throw new NoAvailableSpaceException();
//
//             if (!this.IsFriendlyToEnclosureAnimals(animal))
//                 throw new NotFriendlyAnimalException();
//
//             Animals.Add(animal);
//             Console.WriteLine("New " + animal.GetType().Name + " " + animal.ID + " added to enclosure " + this.Name + " in zoo " + ParentZoo.Location);
//         }
//
//         public int GetAvailableSquareFeet()
//         {
//             int availableSquareFeet = SquareFeet;
//             foreach (var animal in Animals)
//             {
//                 availableSquareFeet -= animal.RequiredSpaceSqFt;
//             }
//
//             return availableSquareFeet;
//         }
//
//         private bool IsFriendlyToEnclosureAnimals(Animal animal)
//         {
//             foreach (var enclosuresAnimal in Animals)
//             {
//                 if (!animal.IsFriendlyWith(enclosuresAnimal))
//                 {
//                     return false;
//                 }
//
//                 if (!enclosuresAnimal.IsFriendlyWith(animal))
//                 {
//                     return false;
//                 }
//             }
//
//             return true;
//         }
//     }
//
// }
import Animal from '../Animals/Animal'
import Logger from '../Logger'
import Zoo from '../Zoo'
import NoAvailableSpaceException from '../Exceptions/NoAvailableSpaceException'
import NotFriendlyAnimalException from '../Exceptions/NotFriendlyAnimalException'

export default class Enclosure {

    #Name
    #Animals = []
    #ParentZoo
    #SquareFeet

    constructor({ name, animals, parentZoo, squareFeet }) {
        this.#Name = name
        this.#Animals = animals
        if (parentZoo instanceof Zoo) {
            this.#ParentZoo = parentZoo
        }
        this.#SquareFeet = squareFeet
    }

    AddAnimals(animal) {
        if (animal instanceof Animal) {
            if (animal.RequiredSpaceSqFt > this.GetAvailableSquareFeet()) {
                throw new NoAvailableSpaceException()
            }

            if (!this.IsFriendlyToEnclosureAnimals(animal)) {
                throw new NotFriendlyAnimalException()
            }

            this.#Animals.push(animal)
            Logger.writeLine('New ' + animal.constructor.name + ' ' + animal.ID + ' added to enclosure ' + this.Name + ' in zoo ' + this.ParentZoo.Location)
        }
    }

    GetAvailableSquareFeet() {
        let availableSquareFeet = this.SquareFeet()
        this.Animals.forEach((animal) => {
            if (animal instanceof Animal) {
                availableSquareFeet -= animal.RequiredSpaceSqFt
            }
        })
        return availableSquareFeet
    }

    IsFriendlyToEnclosureAnimals(animal) {
        if (animal instanceof Animal) {
            this.Animals.forEach((enclosuresAnimal) => {
                if (enclosuresAnimal instanceof Animal) {
                    if (!animal.IsFriendlyWith(enclosuresAnimal)) {
                        return false
                    }

                    if (!enclosuresAnimal.IsFriendlyWith(animal)) {
                        return false
                    }
                }
            })
            return true
        }
        return false
    }

    get Name() {
        return this.#Name
    }

    get Animals() {
        return this.#Animals
    }

    get ParentZoo() {
        return this.#ParentZoo
    }

    get SquareFeet() {
        return this.#SquareFeet
    }
}





