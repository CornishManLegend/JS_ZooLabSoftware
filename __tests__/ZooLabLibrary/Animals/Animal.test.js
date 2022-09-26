import { expect, test } from '@jest/globals';
import Animal from '../../../src/ZooLabLibrary/Animals/Animal'

test('Should be able to throw an error when trying to create an instance of Animal', () => {
    try {
        const animal = new Animal({iD: 1});
    } catch (e) {
        expect(e).not.toBeNull();
        expect(e.toString()).toBe("Error: Animal: can not create instance of abstract class")
    }
});
