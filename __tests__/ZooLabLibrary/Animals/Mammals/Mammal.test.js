import { expect, test } from '@jest/globals';
import Mammal from '../../../../src/ZooLabLibrary/Animals/Mammals/Mammal'

test('Should be able to throw an error when trying to create an instance of Mammal', () => {
    try {
        const mammal = new Mammal({iD: 1, isSick: true, isHungry: false});
    } catch (e) {
        expect(e).not.toBeNull();
        expect(e.toString()).toBe("Error: Mammal: can not create instance of abstract class")
    }
});