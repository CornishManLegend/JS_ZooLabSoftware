import { expect, test } from '@jest/globals'
import ZooApp from '../src/ZooLabLibrary/ZooApp.js'
import Zoo from '../src/ZooLabLibrary/Zoo.js'
import Enclosure from '../src/ZooLabLibrary/Enclosures/Enclosure.js'
import Parrot from '../src/ZooLabLibrary/Animals/Birds/Parrot.js'
import Penguin from '../src/ZooLabLibrary/Animals/Birds/Penguin.js'
import Bison from '../src/ZooLabLibrary/Animals/Mammals/Bison.js'
import Elephant from '../src/ZooLabLibrary/Animals/Mammals/Elephant.js'
import Lion from '../src/ZooLabLibrary/Animals/Mammals/Lion.js'
import Snake from '../src/ZooLabLibrary/Animals/Reptiles/Snake.js'
import Turtle from '../src/ZooLabLibrary/Animals/Reptiles/Turtle.js'
import Veterinarian from '../src/ZooLabLibrary/Employees/Veterinarian.js'
import ZooKeeper from '../src/ZooLabLibrary/Employees/ZooKeeper.js'
import Logger from '../src/ZooLabLibrary/Logger'

test('Should be able to run ZooCorp', () => {
    const zooCorp = new ZooApp()
    const zoo1 = new Zoo({ location: 'Texas' })
    const zoo2 = new Zoo({ location: 'Hollywood' })

    zooCorp.AddZoo(zoo1)
    zooCorp.AddZoo(zoo2)

    for (let i = 1; i < 11; i++) {
        const zoo1enclosure = new Enclosure({ name: 'Enclosure' + i, animals: [], parentZoo: zoo1, squareFeet: 2000 })
        const zoo2enclosure = new Enclosure({ name: 'Enclosure' + i, animals: [], parentZoo: zoo2, squareFeet: 2000 })

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

    animals.forEach((animal) => {
        zoo1.FindAvailableEnclosure(animal).AddAnimals(animal)
    })

    animals.forEach((animal) => {
        zoo2.FindAvailableEnclosure(animal).AddAnimals(animal)
    })


    const zoo1employees =
        [
            new Veterinarian({ firstName: 'Ben', lastName: 'Gunn', animalExperiences: animals }),
            new Veterinarian({ firstName: 'Jim', lastName: 'Hawkins', animalExperiences: animals }),
            new ZooKeeper({ firstName: 'John', lastName: 'Trelawney', animalExperiences: animals }),
            new ZooKeeper({ firstName: 'David', lastName: 'Livesey', animalExperiences: animals })
        ]

    const zoo2employees =
        [
            new Veterinarian({ firstName: 'Billy', lastName: 'Bones', animalExperiences: animals }),
            new Veterinarian({ firstName: 'John', lastName: 'Silver', animalExperiences: animals }),
            new ZooKeeper({ firstName: 'David', lastName: 'Pew', animalExperiences: animals }),
            new ZooKeeper({ firstName: 'Job', lastName: 'Anderson', animalExperiences: animals })
        ]

    zoo1employees.forEach((employee) => {
        zoo1.HireEmployee(employee)
    })

    zoo2employees.forEach((employee) => {
        zoo2.HireEmployee(employee)
    })

    zoo1.FeedAnimals()
    zoo1.HealAnimals()

    zoo2.FeedAnimals()
    zoo2.HealAnimals()

    const logs = [
        'New zoo was created in Texas',
        'New zoo was created in Hollywood',
        'New zoo located in Texas added to Zoo Corporation',
        'New zoo located in Hollywood added to Zoo Corporation',
        'New Enclosure added: Enclosure1 to zoo in Texas',
        'New Enclosure added: Enclosure1 to zoo in Hollywood',
        'New Enclosure added: Enclosure2 to zoo in Texas',
        'New Enclosure added: Enclosure2 to zoo in Hollywood',
        'New Enclosure added: Enclosure3 to zoo in Texas',
        'New Enclosure added: Enclosure3 to zoo in Hollywood',
        'New Enclosure added: Enclosure4 to zoo in Texas',
        'New Enclosure added: Enclosure4 to zoo in Hollywood',
        'New Enclosure added: Enclosure5 to zoo in Texas',
        'New Enclosure added: Enclosure5 to zoo in Hollywood',
        'New Enclosure added: Enclosure6 to zoo in Texas',
        'New Enclosure added: Enclosure6 to zoo in Hollywood',
        'New Enclosure added: Enclosure7 to zoo in Texas',
        'New Enclosure added: Enclosure7 to zoo in Hollywood',
        'New Enclosure added: Enclosure8 to zoo in Texas',
        'New Enclosure added: Enclosure8 to zoo in Hollywood',
        'New Enclosure added: Enclosure9 to zoo in Texas',
        'New Enclosure added: Enclosure9 to zoo in Hollywood',
        'New Enclosure added: Enclosure10 to zoo in Texas',
        'New Enclosure added: Enclosure10 to zoo in Hollywood',
        'New Parrot 1 added to enclosure Enclosure10 in zoo Texas',
        'New Penguin 2 added to enclosure Enclosure9 in zoo Texas',
        'New Bison 3 added to enclosure Enclosure8 in zoo Texas',
        'New Elephant 4 added to enclosure Enclosure10 in zoo Texas',
        'New Lion 5 added to enclosure Enclosure7 in zoo Texas',
        'New Snake 6 added to enclosure Enclosure6 in zoo Texas',
        'New Turtle 7 added to enclosure Enclosure10 in zoo Texas',
        'New Parrot 1 added to enclosure Enclosure10 in zoo Hollywood',
        'New Penguin 2 added to enclosure Enclosure9 in zoo Hollywood',
        'New Bison 3 added to enclosure Enclosure8 in zoo Hollywood',
        'New Elephant 4 added to enclosure Enclosure10 in zoo Hollywood',
        'New Lion 5 added to enclosure Enclosure7 in zoo Hollywood',
        'New Snake 6 added to enclosure Enclosure6 in zoo Hollywood',
        'New Turtle 7 added to enclosure Enclosure10 in zoo Hollywood',
        'New Veterinarian created Ben Gunn',
        'New Veterinarian created Jim Hawkins',
        'New ZooKeeper created John Trelawney',
        'New ZooKeeper created David Livesey',
        'New Veterinarian created Billy Bones',
        'New Veterinarian created John Silver',
        'New ZooKeeper created David Pew',
        'New ZooKeeper created Job Anderson',
        'New Employee added: Ben Gunn in zoo Texas',
        'New Employee added: Jim Hawkins in zoo Texas',
        'New Employee added: John Trelawney in zoo Texas',
        'New Employee added: David Livesey in zoo Texas',
        'New Employee added: Billy Bones in zoo Hollywood',
        'New Employee added: John Silver in zoo Hollywood',
        'New Employee added: David Pew in zoo Hollywood',
        'New Employee added: Job Anderson in zoo Hollywood',
        'The Snake 6 in zoo Texas was fed by zooKeeper John Trelawney',
        'The Lion 5 in zoo Texas was fed by zooKeeper John Trelawney',
        'The Bison 3 in zoo Texas was fed by zooKeeper John Trelawney',
        'The Penguin 2 in zoo Texas was fed by zooKeeper John Trelawney',
        'The Parrot 1 in zoo Texas was fed by zooKeeper John Trelawney',
        'The Elephant 4 in zoo Texas was fed by zooKeeper John Trelawney',
        'The Turtle 7 in zoo Texas was fed by zooKeeper John Trelawney',
        'The Snake 6 in zoo Texas was fed by zooKeeper John Trelawney',
        'The Lion 5 in zoo Texas was fed by zooKeeper David Livesey',
        'The Bison 3 in zoo Texas was fed by zooKeeper John Trelawney',
        'The Penguin 2 in zoo Texas was fed by zooKeeper David Livesey',
        'The Parrot 1 in zoo Texas was fed by zooKeeper John Trelawney',
        'The Elephant 4 in zoo Texas was fed by zooKeeper David Livesey',
        'The Turtle 7 in zoo Texas was fed by zooKeeper John Trelawney',
        'The Snake 6 in zoo Texas was healed by veterinarian Ben Gunn',
        'The Lion 5 in zoo Texas was healed by veterinarian Ben Gunn',
        'The Bison 3 in zoo Texas was healed by veterinarian Ben Gunn',
        'The Penguin 2 in zoo Texas was healed by veterinarian Ben Gunn',
        'The Parrot 1 in zoo Texas was healed by veterinarian Ben Gunn',
        'The Elephant 4 in zoo Texas was healed by veterinarian Ben Gunn',
        'The Turtle 7 in zoo Texas was healed by veterinarian Ben Gunn',
        'The Snake 6 in zoo Texas was healed by veterinarian Ben Gunn',
        'The Lion 5 in zoo Texas was healed by veterinarian Jim Hawkins',
        'The Bison 3 in zoo Texas was healed by veterinarian Ben Gunn',
        'The Penguin 2 in zoo Texas was healed by veterinarian Jim Hawkins',
        'The Parrot 1 in zoo Texas was healed by veterinarian Ben Gunn',
        'The Elephant 4 in zoo Texas was healed by veterinarian Jim Hawkins',
        'The Turtle 7 in zoo Texas was healed by veterinarian Ben Gunn',
        'The Snake 6 in zoo Texas was healed by veterinarian Ben Gunn',
        'The Lion 5 in zoo Texas was healed by veterinarian Jim Hawkins',
        'The Bison 3 in zoo Texas was healed by veterinarian Ben Gunn',
        'The Penguin 2 in zoo Texas was healed by veterinarian Jim Hawkins',
        'The Parrot 1 in zoo Texas was healed by veterinarian Ben Gunn',
        'The Elephant 4 in zoo Texas was healed by veterinarian Jim Hawkins',
        'The Turtle 7 in zoo Texas was healed by veterinarian Ben Gunn',
        'The Snake 6 in zoo Texas was healed by veterinarian Ben Gunn',
        'The Lion 5 in zoo Texas was healed by veterinarian Jim Hawkins',
        'The Bison 3 in zoo Texas was healed by veterinarian Ben Gunn',
        'The Penguin 2 in zoo Texas was healed by veterinarian Jim Hawkins',
        'The Parrot 1 in zoo Texas was healed by veterinarian Ben Gunn',
        'The Elephant 4 in zoo Texas was healed by veterinarian Jim Hawkins',
        'The Turtle 7 in zoo Texas was healed by veterinarian Ben Gunn',
        'The Snake 6 in zoo Hollywood was fed by zooKeeper David Pew',
        'The Lion 5 in zoo Hollywood was fed by zooKeeper David Pew',
        'The Bison 3 in zoo Hollywood was fed by zooKeeper David Pew',
        'The Penguin 2 in zoo Hollywood was fed by zooKeeper David Pew'
        // ... 38 more items
    ]
    for (let log in logs) {
        expect(Logger.logs).toContain(logs[log])
    }
})


