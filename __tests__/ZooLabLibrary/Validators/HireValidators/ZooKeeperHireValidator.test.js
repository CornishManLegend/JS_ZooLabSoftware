import { expect, test } from '@jest/globals';

import Turtle from '../../../../src/ZooLabLibrary/Animals/Reptiles/Turtle'
import Parrot from '../../../../src/ZooLabLibrary/Animals/Birds/Parrot'
import Elephant from '../../../../src/ZooLabLibrary/Animals/Mammals/Elephant'
import Zoo from '../../../../src/ZooLabLibrary/Zoo'
import Enclosure from '../../../../src/ZooLabLibrary/Enclosures/Enclosure'
import ZooKeeperHireValidator from '../../../../src/ZooLabLibrary/Validators/HireValidators/ZooKeeperHireValidator'
import ZooKeeper from '../../../../src/ZooLabLibrary/Employees/ZooKeeper'

test('Should be able to create a ZooKeeperHireValidator', () => {
    const zooKeeperHireValidator = new ZooKeeperHireValidator();
    expect(zooKeeperHireValidator).toBeDefined();
});

test('Should be able to validate a zooKeeper who has experiences', () => {
    let animalExperiences = [
        new Turtle({iD: 1, isSick: false, isHungry: false}),
        new Parrot({iD: 2, isSick: false, isHungry: false}),
        new Elephant({iD: 3, isSick: false, isHungry: false})
    ]
    let zooKeeper = new ZooKeeper({firstName: "John" , lastName: "Silver", animalExperiences: animalExperiences});
    let zoo = new Zoo("New York");
    let enclosure = new Enclosure({name: "testEnclosure" , animals: animalExperiences, parentZoo: zoo, squareFeet: 3000});
    zoo.AddEnclosure(enclosure);
    let zooKeeperHireValidator = new ZooKeeperHireValidator(zoo);
    expect(zooKeeperHireValidator.ValidateEmployee(zooKeeper).length).toBe(0);
});

test('Should be able to validate a zooKeeper who has no experiences', () => {
    let animalList = [
        new Turtle({iD: 1, isSick: false, isHungry: false}),
        new Parrot({iD: 2, isSick: false, isHungry: false}),
        new Elephant({iD: 3, isSick: false, isHungry: false})
    ]
    let zooKeeper = new ZooKeeper({firstName: "John" , lastName: "Silver", animalExperiences: []});
    let zoo = new Zoo("New York");
    let enclosure = new Enclosure({name: "testEnclosure" , animals: animalList, parentZoo: zoo, squareFeet: 3000});
    zoo.AddEnclosure(enclosure);
    let zooKeeperHireValidator = new ZooKeeperHireValidator(zoo);
    expect(zooKeeperHireValidator.ValidateEmployee(zooKeeper).length).not.toBeNull();
});