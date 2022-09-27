import { expect, test } from '@jest/globals'
import Zoo from '../../src/ZooLabLibrary/Zoo'
import Turtle from '../../src/ZooLabLibrary/Animals/Reptiles/Turtle'
import Parrot from '../../src/ZooLabLibrary/Animals/Birds/Parrot'
import Elephant from '../../src/ZooLabLibrary/Animals/Mammals/Elephant'
import Enclosure from '../../src/ZooLabLibrary/Enclosures/Enclosure'
import Lion from '../../src/ZooLabLibrary/Animals/Mammals/Lion'
import ZooKeeper from '../../src/ZooLabLibrary/Employees/ZooKeeper'
import Bison from '../../src/ZooLabLibrary/Animals/Mammals/Bison'
import Veterinarian from '../../src/ZooLabLibrary/Employees/Veterinarian'


test('Should be able to create a Zoo', () => {
    let zoo = new Zoo("New York");
    expect(zoo).toBeDefined();
});

test('Should be able to add an enclosure', () => {
    let zoo = new Zoo("New York");
    let animalList = [
        new Turtle({iD: 1, isSick: false, isHungry: false}),
        new Parrot({iD: 2, isSick: false, isHungry: false}),
        new Elephant({iD: 3, isSick: false, isHungry: false})
    ]
    let enclosure = new Enclosure({name: "testEnclosure" , animals: animalList, parentZoo: zoo, squareFeet: 3000});
    zoo.AddEnclosure(enclosure);
    expect(zoo.Enclosures.length).not.toBe(0);
    expect(zoo.Enclosures.length).toBe(1);
});

test('Should be able to find available enclosure', () => {
    let zoo = new Zoo("New York");
    let animalList = [
        new Parrot({iD: 1, isSick: false, isHungry: false}),
        new Elephant({iD: 2, isSick: false, isHungry: false})
    ]
    let enclosure = new Enclosure({name: "testEnclosure" , animals: animalList, parentZoo: zoo, squareFeet: 3000});
    zoo.AddEnclosure(enclosure);
    const availableEnclosure = zoo.FindAvailableEnclosure(new Turtle({iD: 3, isSick: false, isHungry: false}))
    expect(availableEnclosure.Name).toBe(enclosure.Name);
});

test('Should be able to throw exception when not find available enclosure', () => {
    let zoo = new Zoo("New York");
    let animalList = [
        new Parrot({iD: 1, isSick: false, isHungry: false}),
        new Elephant({iD: 2, isSick: false, isHungry: false})
    ]
    let enclosure = new Enclosure({name: "testEnclosure" , animals: animalList, parentZoo: zoo, squareFeet: 1005});
    zoo.AddEnclosure(enclosure);
    try {
        const availableEnclosure = zoo.FindAvailableEnclosure(new Turtle({iD: 3, isSick: false, isHungry: false}))
    } catch (e) {
        expect(e).not.toBeNull();
        expect(e.toString()).toBe("Error: NoAvailableEnclosureException")
    }
});

test('Should be able to throw exception when not find available enclosure because of unfriendliness', () => {
    let zoo = new Zoo("New York");
    let animalList = [
        new Parrot({iD: 1, isSick: false, isHungry: false}),
        new Elephant({iD: 2, isSick: false, isHungry: false})
    ]
    let enclosure = new Enclosure({name: "testEnclosure" , animals: animalList, parentZoo: zoo, squareFeet: 3005});
    zoo.AddEnclosure(enclosure);
    try {
        const availableEnclosure = zoo.FindAvailableEnclosure(new Lion({iD: 3, isSick: false, isHungry: false}))
    } catch (e) {
        expect(e).not.toBeNull();
        expect(e.toString()).toBe("Error: NoAvailableEnclosureException")
    }
});

test('Should be able to hire zookeeper', () => {
    let zoo = new Zoo("New York");
    let animalList = [
        new Parrot({iD: 1, isSick: false, isHungry: false}),
        new Elephant({iD: 2, isSick: false, isHungry: false})
    ]
    let enclosure = new Enclosure({name: "testEnclosure" , animals: animalList, parentZoo: zoo, squareFeet: 1005});
    zoo.AddEnclosure(enclosure);
    let zooKeeper = new ZooKeeper({firstName: "John" , lastName: "Silver", animalExperiences: animalList});
    zoo.HireEmployee(zooKeeper)
    expect(zoo.Employees).toContain(zooKeeper);
});

test('Should be able to throw NoNeededExperienceException when hire zookeeper', () => {
    let zoo = new Zoo("New York");
    let animalList = [
        new Parrot({iD: 1, isSick: false, isHungry: false}),
        new Elephant({iD: 2, isSick: false, isHungry: false})
    ]
    let enclosure = new Enclosure({name: "testEnclosure" , animals: animalList, parentZoo: zoo, squareFeet: 1005});
    zoo.AddEnclosure(enclosure);
    let experiences = [
        new Bison({iD: 3, isSick: false, isHungry: false}),
    ]
    let zooKeeper = new ZooKeeper({firstName: "John" , lastName: "Silver", animalExperiences: experiences});

    try {
        zoo.HireEmployee(zooKeeper)
    } catch (e) {
        expect(e).not.toBeNull();
        expect(e.toString()).toBe("Error: NoNeededExperienceException")
    }
});

test('Should be able to hire veterinarian', () => {
    let zoo = new Zoo("New York");
    let animalList = [
        new Parrot({iD: 1, isSick: false, isHungry: false}),
        new Elephant({iD: 2, isSick: false, isHungry: false})
    ]
    let enclosure = new Enclosure({name: "testEnclosure" , animals: animalList, parentZoo: zoo, squareFeet: 1005});
    zoo.AddEnclosure(enclosure);
    let veterinarian = new Veterinarian({firstName: "John" , lastName: "Silver", animalExperiences: animalList});
    zoo.HireEmployee(veterinarian)
    expect(zoo.Employees).toContain(veterinarian);
});

test('Should be able to throw NoNeededExperienceException when hire veterinarian', () => {
    let zoo = new Zoo("New York");
    let animalList = [
        new Parrot({iD: 1, isSick: false, isHungry: false}),
        new Elephant({iD: 2, isSick: false, isHungry: false})
    ]
    let enclosure = new Enclosure({name: "testEnclosure" , animals: animalList, parentZoo: zoo, squareFeet: 1005});
    zoo.AddEnclosure(enclosure);
    let experiences = [
        new Bison({iD: 3, isSick: false, isHungry: false}),
    ]
    let veterinarian = new Veterinarian({firstName: "John" , lastName: "Silver", animalExperiences: experiences});

    try {
        zoo.HireEmployee(veterinarian)
    } catch (e) {
        expect(e).not.toBeNull();
        expect(e.toString()).toBe("Error: NoNeededExperienceException")
    }
});

test('Should be able to feed animals', () => {
    let zoo = new Zoo("New York");
    let animalList = [
        new Parrot({iD: 1, isSick: false, isHungry: true}),
        new Elephant({iD: 2, isSick: false, isHungry: true})
    ]
    let enclosure = new Enclosure({name: "testEnclosure" , animals: animalList, parentZoo: zoo, squareFeet: 1005});
    zoo.AddEnclosure(enclosure);
    let zooKeeper = new ZooKeeper({firstName: "John" , lastName: "Silver", animalExperiences: animalList});
    zoo.HireEmployee(zooKeeper)
    zoo.FeedAnimals()
    animalList.forEach((animal)=>{
        expect(animal.IsHungry).toBe(false);
    })
});

test('Should be able to heal animals', () => {
    let zoo = new Zoo("New York");
    let animalList = [
        new Parrot({iD: 1, isSick: true, isHungry: false}),
        new Elephant({iD: 2, isSick: true, isHungry: false})
    ]
    let enclosure = new Enclosure({name: "testEnclosure" , animals: animalList, parentZoo: zoo, squareFeet: 1005});
    zoo.AddEnclosure(enclosure);
    let veterinarian = new Veterinarian({firstName: "John" , lastName: "Silver", animalExperiences: animalList});
    zoo.HireEmployee(veterinarian)
    zoo.HealAnimals()
    animalList.forEach((animal)=>{
        expect(animal.IsSick).toBe(false);
    })
});