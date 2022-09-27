import { expect, test } from '@jest/globals'
import Enclosure from '../../../src/ZooLabLibrary/Enclosures/Enclosure'
import Zoo from '../../../src/ZooLabLibrary/Zoo'
import Elephant from '../../../src/ZooLabLibrary/Animals/Mammals/Elephant'
import Parrot from '../../../src/ZooLabLibrary/Animals/Birds/Parrot';
import Bison from '../../../src/ZooLabLibrary/Animals/Mammals/Bison';
import Turtle from '../../../src/ZooLabLibrary/Animals/Reptiles/Turtle';
import Animal from '../../../src/ZooLabLibrary/Animals/Animal'
import NotFriendlyAnimalException from '../../../src/ZooLabLibrary/Exceptions/NotFriendlyAnimalException'
import Lion from '../../../src/ZooLabLibrary/Animals/Mammals/Lion'

test('Should be able to create an Enclosure', () => {
    const enclosure = new Enclosure({name: "testEnclosure" , animals: [], parentZoo: new Zoo("location"), squareFeet: 3000});
    expect(enclosure).toBeDefined();
});

test('Should be able to create an Enclosure with animals', () => {
    const animalsList = [
        new Turtle({iD: 1, isSick: false, isHungry: false}),
        new Parrot({iD: 2, isSick: false, isHungry: false}),
        new Elephant({iD: 3, isSick: false, isHungry: false})
    ]
    const enclosure = new Enclosure({name: "testEnclosure" , animals: animalsList, parentZoo: new Zoo("location"), squareFeet: 3000});
    expect(enclosure).toBeDefined();
});

test('Should be able to add animal', () => {
    const animalsList = [
        new Parrot({iD: 1, isSick: false, isHungry: false}),
        new Elephant({iD: 2, isSick: false, isHungry: false})
    ]
    const enclosure = new Enclosure({name: "testEnclosure" , animals: animalsList, parentZoo: new Zoo("location"), squareFeet: 3000});
    enclosure.AddAnimals(new Turtle({iD: 1, isSick: false, isHungry: false}))
    const enclosureAnimalTypes = [];

    enclosure.Animals.forEach((animal) => {
        if (animal instanceof Animal) {
            enclosureAnimalTypes.push(animal.constructor.name)
        }
    })
    expect(enclosureAnimalTypes).toContain("Turtle");
});

test('Should be able to return false when animal type is wrong', () => {
    const animalsList = [
        new Parrot({iD: 1, isSick: false, isHungry: false}),
        new Elephant({iD: 2, isSick: false, isHungry: false})
    ]
    const enclosure = new Enclosure({name: "testEnclosure" , animals: animalsList, parentZoo: new Zoo("location"), squareFeet: 3000});
    expect(enclosure.IsFriendlyToEnclosureAnimals("Turtle")).toBe(false);
});

test('Should be able to throw NoAvailableSpaceException when not enough space', () => {
    const animalsList = [
        new Parrot({iD: 1, isSick: false, isHungry: false}),
        new Turtle({iD: 2, isSick: false, isHungry: false})
    ]
    const enclosure = new Enclosure({name: "testEnclosure" , animals: animalsList, parentZoo: new Zoo("location"), squareFeet: 500});

    try {
        enclosure.AddAnimals(new Elephant({iD: 3, isSick: false, isHungry: false}))
    } catch (e) {
        expect(e).not.toBeNull();
        expect(e.toString()).toBe("Error: NoAvailableSpaceException")
    }
});

test('Should be able to throw NotFriendlyAnimalException when add not friendly animal', async () => {
    const animalsList = [
        new Parrot({iD: 1, isSick: false, isHungry: false}),
        new Turtle({iD: 2, isSick: false, isHungry: false}),
    ]
    const enclosure = new Enclosure({name: "testEnclosure" , animals: animalsList, parentZoo: new Zoo("location"), squareFeet: 3000});

    try {
        await enclosure.AddAnimals(new Lion({iD: 4, isSick: false, isHungry: false}))
    } catch (e) {
        expect(e).not.toBeNull();
        expect(e.toString()).toBe("Error: NotFriendlyAnimalException")
        expect(e).toBe(new NotFriendlyAnimalException())
        expect(e).toBeDefined();
    }
});

// test('Should be able to throw NotFriendlyAnimalException when add not friendly animal 2', async () => {
//     const animalsList = [
//         new Parrot({ iD: 1, isSick: false, isHungry: false }),
//         new Turtle({ iD: 2, isSick: false, isHungry: false }),
//         new Elephant({ iD: 3, isSick: false, isHungry: false })
//     ]
//     const enclosure = new Enclosure({
//         name: "testEnclosure",
//         animals: animalsList,
//         parentZoo: new Zoo("location"),
//         squareFeet: 3000
//     });
//     let lion = new Lion({ iD: 4, isSick: false, isHungry: false });
//
//
//     await expect(async () => {
//         await enclosure.AddAnimals(lion);
//     }).rejects.toThrowError("Error: NotFriendlyAnimalException");
// });

test('Should be able to throw NotFriendlyAnimalException when add an animal to enclosure with not friendly animals', () => {
    const animalsList = [
        new Bison({iD: 1, isSick: false, isHungry: false}),
        new Bison({iD: 2, isSick: false, isHungry: false}),
    ]
    const enclosure = new Enclosure({name: "testEnclosure" , animals: animalsList, parentZoo: new Zoo("location"), squareFeet: 3000});

    try {
        enclosure.AddAnimals(new Parrot({iD: 3, isSick: false, isHungry: false}))
    } catch (e) {
        expect(e).not.toBeNull();
        expect(e.toString()).toBe("Error: NotFriendlyAnimalException")
    }
});

