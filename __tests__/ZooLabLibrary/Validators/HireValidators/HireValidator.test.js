import { expect, test } from '@jest/globals';
import HireValidator from '../../../../src/ZooLabLibrary/Validators/HireValidators/HireValidator'

test('Should be able to throw an error when trying to create an instance of HireValidator', () => {
    try {
        const hireValidator = new HireValidator();
    } catch (e) {
        expect(e).not.toBeNull();
        expect(e.toString()).toBe("Error: Can not create instance of abstract class - HireValidator")
    }
});