import ZooApp from './ZooLabLibrary/ZooApp.js'
import Zoo from './ZooLabLibrary/Zoo.js'
import Enclosure from './ZooLabLibrary/Enclosures/Enclosure.js'
import Parrot from './ZooLabLibrary/Animals/Birds/Parrot.js'
import Penguin from './ZooLabLibrary/Animals/Birds/Penguin.js'
import Bison from './ZooLabLibrary/Animals/Mammals/Bison.js'
import Elephant from './ZooLabLibrary/Animals/Mammals/Elephant.js'
import Lion from './ZooLabLibrary/Animals/Mammals/Lion.js'
import Snake from './ZooLabLibrary/Animals/Reptiles/Snake.js'
import Turtle from './ZooLabLibrary/Animals/Reptiles/Turtle.js'
import Veterinarian from './ZooLabLibrary/Employees/Veterinarian.js'
import ZooKeeper from './ZooLabLibrary/Employees/ZooKeeper.js'
import logs from './ZooLabLibrary/Logger.js'


const zooCorp = new ZooApp()
const zoo1 = new Zoo({location: "Texas"});
const zoo2 = new Zoo({location: "Hollywood"});

zooCorp.AddZoo(zoo1);
zooCorp.AddZoo(zoo2);

for (let i = 1; i < 11; i++) {
    const zoo1enclosure = new Enclosure({name: "Enclosure" + i , animals: [], parentZoo: zoo1, squareFeet: 2000});
    const zoo2enclosure = new Enclosure({name: "Enclosure" + i , animals: [], parentZoo: zoo2, squareFeet: 2000});

    zoo1.AddEnclosure(zoo1enclosure)
    zoo2.AddEnclosure(zoo2enclosure)
}

const animals =
    [
        new Parrot({ iD: 1, isSick: true, isHungry: true }),
        new Penguin({ iD: 2, isSick: true, isHungry: true }),
        new Bison({ iD: 3, isSick: true, isHungry: true }),
        new Elephant({ iD: 4, isSick: true, isHungry: true }),
        new Lion({ iD: 5, isSick: true, isHungry: true }),
        new Snake({ iD: 6, isSick: true, isHungry: true }),
        new Turtle({ iD: 7, isSick: true, isHungry: true })
    ]

animals.forEach((animal)=>{
    zoo1.FindAvailableEnclosure(animal).AddAnimals(animal);
})

animals.forEach((animal)=>{
    zoo2.FindAvailableEnclosure(animal).AddAnimals(animal);
})


const zoo1employees =
[
    new Veterinarian({firstName: "Ben" , lastName: "Gunn", animalExperiences: animals}),
    new Veterinarian({firstName: "Jim" , lastName: "Hawkins", animalExperiences: animals}),
    new ZooKeeper({firstName: "John" , lastName: "Trelawney", animalExperiences: animals}),
    new ZooKeeper({firstName: "David" , lastName: "Livesey", animalExperiences: animals}),
]

const zoo2employees =
    [
        new Veterinarian({firstName: "Billy" , lastName: "Bones", animalExperiences: animals}),
        new Veterinarian({firstName: "John" , lastName: "Silver", animalExperiences: animals}),
        new ZooKeeper({firstName: "David" , lastName: "Pew", animalExperiences: animals}),
        new ZooKeeper({firstName: "Job" , lastName: "Anderson", animalExperiences: animals}),
    ]

zoo1employees.forEach((employee)=>{
    zoo1.HireEmployee(employee);
})

zoo2employees.forEach((employee)=>{
    zoo2.HireEmployee(employee);
})

zoo1.FeedAnimals()
zoo1.HealAnimals()

zoo2.FeedAnimals()
zoo2.HealAnimals()

import * as fs from 'fs';
const myConsole = new console.Console(fs.createWriteStream('../log.txt'));
myConsole.log(logs);

console.log(logs)