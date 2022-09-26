import { expect, test } from '@jest/globals';
import Bird from '../../../../src/ZooLabLibrary/Animals/Birds/Bird'

test('Should be able to throw an error when trying to create an instance of Bird', () => {
    try {
        const bird = new Bird({iD: 1, isSick: true, isHungry: false});
    } catch (e) {
        expect(e).not.toBeNull();
        expect(e.toString()).toBe("Error: Bird: can not create instance of abstract class")
    }
});