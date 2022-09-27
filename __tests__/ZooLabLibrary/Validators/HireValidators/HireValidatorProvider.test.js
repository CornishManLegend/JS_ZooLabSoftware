import { expect, test } from '@jest/globals';

import Zoo from '../../../../src/ZooLabLibrary/Zoo'
import ZooKeeperHireValidator from '../../../../src/ZooLabLibrary/Validators/HireValidators/ZooKeeperHireValidator'
import ZooKeeper from '../../../../src/ZooLabLibrary/Employees/ZooKeeper'
import HireValidatorProvider from '../../../../src/ZooLabLibrary/Validators/HireValidators/HireValidatorProvider'
import Veterinarian from '../../../../src/ZooLabLibrary/Employees/Veterinarian'

test('Should be able to create a HireValidatorProvider', () => {
    const hireValidatorProvider = new HireValidatorProvider();
    expect(hireValidatorProvider).toBeDefined();
});

test('Should be able to create a HireValidatorProvider for ZooKeeper', () => {
    let zooKeeper = new ZooKeeper({firstName: "John" , lastName: "Silver", animalExperiences: []});
    let zoo = new Zoo("New York");
    let hireValidatorProvider = new HireValidatorProvider(zoo);
    let zooKeeperHireValidator = hireValidatorProvider.GetHireValidator(zooKeeper);
    expect(zooKeeperHireValidator.constructor.name).toBe("ZooKeeperHireValidator");
});

test('Should be able to create a HireValidatorProvider for Veterinarian', () => {
    let veterinarian = new Veterinarian({firstName: "John" , lastName: "Silver", animalExperiences: []});
    let zoo = new Zoo("New York");
    let hireValidatorProvider = new HireValidatorProvider(zoo);
    let zooKeeperHireValidator = hireValidatorProvider.GetHireValidator(veterinarian);
    expect(zooKeeperHireValidator.constructor.name).toBe("VeterinarianHireValidator");
});

test('Should be able to trow an Error when validation object is wrong', () => {
    let veterinarian = "Veterinarian";
    let zoo = new Zoo("New York");
    let hireValidatorProvider = new HireValidatorProvider(zoo);
    try {
        let zooKeeperHireValidator = hireValidatorProvider.GetHireValidator(veterinarian);
    } catch (e) {
        expect(e).not.toBeNull();
        expect(e.toString()).toBe("Error: Undefined employee detected String")
    }
});