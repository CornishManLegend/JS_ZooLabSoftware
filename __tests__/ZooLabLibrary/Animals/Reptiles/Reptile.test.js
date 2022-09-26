import { expect, test } from '@jest/globals';
import Reptile from '../../../../src/ZooLabLibrary/Animals/Reptiles/Reptile'

test('Should be able to throw an error when trying to create an instance of Reptile', () => {
    try {
        const reptile = new Reptile({iD: 1, isSick: true, isHungry: false});
    } catch (e) {
        expect(e).not.toBeNull();
        expect(e.toString()).toBe("Error: Reptile: can not create instance of abstract class")
    }
});