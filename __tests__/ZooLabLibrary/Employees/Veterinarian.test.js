import { expect, test } from '@jest/globals'
import Veterinarian from '../../../src/ZooLabLibrary/Employees/Veterinarian';
import Elephant from '../../../src/ZooLabLibrary/Animals/Mammals/Elephant'
import Parrot from '../../../src/ZooLabLibrary/Animals/Birds/Parrot';
import Bison from '../../../src/ZooLabLibrary/Animals/Mammals/Bison';
import Turtle from '../../../src/ZooLabLibrary/Animals/Reptiles/Turtle';

test('Should be able to create a veterinarian', () => {
    const veterinarian = new Veterinarian({firstName: "John" , lastName: "Silver", animalExperiences: []});
    expect(veterinarian).toBeDefined();
});


test('Should be able to set/get veterinarian firstName', () => {
    const veterinarian = new Veterinarian({firstName: "" , lastName: "", animalExperiences: []});
    veterinarian.FirstName = "John";
    expect(veterinarian.FirstName).toBe("John");
});

test('Should be able to set/get veterinarian lastName', () => {
    const veterinarian = new Veterinarian({firstName: "" , lastName: "", animalExperiences: []});
    veterinarian.LastName = "Silver";
    expect(veterinarian.LastName).toBe("Silver");
});

test('Should be able to create a veterinarian with animal experiences', () => {

    const elephant = new Elephant({iD: 1, isSick: false, isHungry: false });
    const parrot = new Parrot({iD: 1, isSick: false, isHungry: false });
    const bison = new Bison({iD: 1, isSick: false, isHungry: false });
    const turtle = new Turtle({iD: 1, isSick: false, isHungry: false });
    const veterinarian = new Veterinarian(
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
    expect(veterinarian).toBeDefined();
});

test('Should be able to get veterinarian experiences', () => {

    const elephant = new Elephant({iD: 1, isSick: false, isHungry: false });
    const parrot = new Parrot({iD: 1, isSick: false, isHungry: false });
    const bison = new Bison({iD: 1, isSick: false, isHungry: false });
    const turtle = new Turtle({iD: 1, isSick: false, isHungry: false });
    const veterinarian = new Veterinarian(
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
    expect(veterinarian.AnimalExperiences).toContain(elephant);
    expect(veterinarian.AnimalExperiences).toContain(parrot);
    expect(veterinarian.AnimalExperiences).toContain(bison);
    expect(veterinarian.AnimalExperiences).toContain(turtle);
});

test('Should be able to heal an animal', () => {
    const elephant = new Elephant({iD: 1, isSick: true, isHungry: false });
    const veterinarian = new Veterinarian({firstName: "John" , lastName: "Silver", animalExperiences: [new Elephant({iD: 1, isSick: true, isHungry: false })]});
    expect(elephant.IsSick).toBe(true);
    expect(veterinarian.HasAnimalExperience(elephant)).toBe(true);
    // veterinarian.HealAnimal(elephant);
    expect(veterinarian.HealAnimal(elephant)).toBe(true);
    expect(elephant.IsSick).toBe(false);
});

test('Should be able to return false when veterinarian has no experiences', () => {
    const elephant = new Elephant({iD: 1, isSick: true, isHungry: false });
    const veterinarian = new Veterinarian({firstName: "John" , lastName: "Silver", animalExperiences: []});
    expect(elephant.IsSick).toBe(true);
    expect(veterinarian.HealAnimal(elephant)).toBe(false);
    expect(elephant.IsSick).toBe(true);
});

test('Should be able to return toString message with first and last names', () => {
    const veterinarian = new Veterinarian({firstName: "John" , lastName: "Silver", animalExperiences: []});
    expect(veterinarian.ToString()).toBe("John Silver");
});