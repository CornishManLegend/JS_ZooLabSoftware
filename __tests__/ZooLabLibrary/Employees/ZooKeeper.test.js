import { expect, test } from '@jest/globals'
import ZooKeeper from '../../../src/ZooLabLibrary/Employees/ZooKeeper';
import Elephant from '../../../src/ZooLabLibrary/Animals/Mammals/Elephant'
import Parrot from '../../../src/ZooLabLibrary/Animals/Birds/Parrot';
import Bison from '../../../src/ZooLabLibrary/Animals/Mammals/Bison';
import Turtle from '../../../src/ZooLabLibrary/Animals/Reptiles/Turtle';

test('Should be able to create a veterinarian', () => {
    const zooKeeper = new ZooKeeper({firstName: "John" , lastName: "Silver", animalExperiences: []});
    expect(zooKeeper).toBeDefined();
});


test('Should be able to set/get zooKeeper firstName', () => {
    const zooKeeper = new ZooKeeper({firstName: "" , lastName: "", animalExperiences: []});
    zooKeeper.FirstName = "John";
    expect(zooKeeper.FirstName).toBe("John");
});

test('Should be able to set/get zooKeeper lastName', () => {
    const zooKeeper = new ZooKeeper({firstName: "" , lastName: "", animalExperiences: []});
    zooKeeper.LastName = "Silver";
    expect(zooKeeper.LastName).toBe("Silver");
});

test('Should be able to create a zooKeeper with animal experiences', () => {

    const elephant = new Elephant({iD: 1, isSick: false, isHungry: false });
    const parrot = new Parrot({iD: 1, isSick: false, isHungry: false });
    const bison = new Bison({iD: 1, isSick: false, isHungry: false });
    const turtle = new Turtle({iD: 1, isSick: false, isHungry: false });
    const zooKeeper = new ZooKeeper(
        {
            firstName: "John",
            lastName: "Silver",
            animalExperiences:
                [
                    elephant,
                    parrot,
                    bison,
                    turtle
                ]});
    expect(zooKeeper).toBeDefined();
});

test('Should be able to get veterinarian experiences', () => {

    const elephant = new Elephant({iD: 1, isSick: false, isHungry: false });
    const parrot = new Parrot({iD: 1, isSick: false, isHungry: false });
    const bison = new Bison({iD: 1, isSick: false, isHungry: false });
    const turtle = new Turtle({iD: 1, isSick: false, isHungry: false });
    const zooKeeper = new ZooKeeper(
        {
            firstName: "John",
            lastName: "Silver",
            animalExperiences:
                [
                    elephant,
                    parrot,
                    bison,
                    turtle
                ]});
    expect(zooKeeper.AnimalExperiences).toContain(elephant);
    expect(zooKeeper.AnimalExperiences).toContain(parrot);
    expect(zooKeeper.AnimalExperiences).toContain(bison);
    expect(zooKeeper.AnimalExperiences).toContain(turtle);
});

test('Should be able to feed an animal', () => {
    const elephant = new Elephant({iD: 1, isSick: false, isHungry: true });
    const zooKeeper = new ZooKeeper({firstName: "John" , lastName: "Silver", animalExperiences: [new Elephant({iD: 1, isSick: true, isHungry: false })]});
    expect(elephant.IsHungry).toBe(true);
    expect(zooKeeper.HasAnimalExperience(elephant)).toBe(true);
    expect(zooKeeper.FeedAnimal(elephant)).toBe(true);
    expect(elephant.IsHungry).toBe(false);
});

test('Should be able to return false when zooKeeper has no experiences and trying feed animal', () => {
    const elephant = new Elephant({iD: 1, isSick: false, isHungry: true });
    const zooKeeper = new ZooKeeper({firstName: "John" , lastName: "Silver", animalExperiences: []});
    expect(elephant.IsHungry).toBe(true);
    expect(zooKeeper.FeedAnimal(elephant)).toBe(false);
    expect(elephant.IsHungry).toBe(true);
});

test('Should be able to return toString message with first and last names', () => {
    const zooKeeper = new ZooKeeper({firstName: "John" , lastName: "Silver", animalExperiences: []});
    expect(zooKeeper.ToString()).toBe("John Silver");
});