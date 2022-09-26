import { expect, test } from '@jest/globals';
import Employee from '../../../src/ZooLabLibrary/Employees/Employee';

test('Should be able to throw an error when trying to create an instance of Employee', () => {
    try {
        const employee = new Employee({firstName: "John" , lastName: "Silver", animalExperiences: []});
    } catch (e) {
        expect(e).not.toBeNull();
        expect(e.toString()).toBe("Error: Can not create instance of abstract class - Employee")
    }
});