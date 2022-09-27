import { expect, test } from '@jest/globals';
import VeterinarianHireValidator
    from '../../../../src/ZooLabLibrary/Validators/HireValidators/VeterinarianHireValidator'
import Turtle from '../../../../src/ZooLabLibrary/Animals/Reptiles/Turtle'
import Parrot from '../../../../src/ZooLabLibrary/Animals/Birds/Parrot'
import Elephant from '../../../../src/ZooLabLibrary/Animals/Mammals/Elephant'
import Veterinarian from '../../../../src/ZooLabLibrary/Employees/Veterinarian'
import Zoo from '../../../../src/ZooLabLibrary/Zoo'
import Enclosure from '../../../../src/ZooLabLibrary/Enclosures/Enclosure'

test('Should be able to create a VeterinarianHireValidator', () => {
    const veterinarianHireValidator = new VeterinarianHireValidator();
    expect(veterinarianHireValidator).toBeDefined();
});

test('Should be able to validate a veterinarian who has experiences', () => {
    let animalExperiences = [
        new Turtle({iD: 1, isSick: false, isHungry: false}),
        new Parrot({iD: 2, isSick: false, isHungry: false}),
        new Elephant({iD: 3, isSick: false, isHungry: false})
    ]
    let veterinarian = new Veterinarian({firstName: "John" , lastName: "Silver", animalExperiences: animalExperiences});
    let zoo = new Zoo("New York");
    let enclosure = new Enclosure({name: "testEnclosure" , animals: animalExperiences, parentZoo: zoo, squareFeet: 3000});
    zoo.AddEnclosure(enclosure);
    let veterinarianHireValidator = new VeterinarianHireValidator(zoo);
    expect(veterinarianHireValidator.ValidateEmployee(veterinarian).length).toBe(0);
});

test('Should be able to validate a veterinarian who has no experiences', () => {
    let animalList = [
        new Turtle({iD: 1, isSick: false, isHungry: false}),
        new Parrot({iD: 2, isSick: false, isHungry: false}),
        new Elephant({iD: 3, isSick: false, isHungry: false})
    ]
    let veterinarian = new Veterinarian({firstName: "John" , lastName: "Silver", animalExperiences: []});
    let zoo = new Zoo("New York");
    let enclosure = new Enclosure({name: "testEnclosure" , animals: animalList, parentZoo: zoo, squareFeet: 3000});
    zoo.AddEnclosure(enclosure);
    let veterinarianHireValidator = new VeterinarianHireValidator(zoo);
    expect(veterinarianHireValidator.ValidateEmployee(veterinarian).length).not.toBeNull();
});