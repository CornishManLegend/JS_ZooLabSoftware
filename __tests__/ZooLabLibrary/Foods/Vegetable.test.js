import { expect, test } from '@jest/globals';
import Vegetable from '../../../src/ZooLabLibrary/Foods/Vegetable';

test('Should be able to get Vegetable', () => {
    expect(new Vegetable().FoodType).toBe('Vegetable');
});