import { expect, test } from '@jest/globals';
import Vegetable from '../../../src/ZooLabLibrary/Foods/Vegetable';

test('Should be able to get grass', () => {
    expect(new Vegetable().FoodType).toBe('Vegetable');
});