import { expect, test } from '@jest/globals';
import Meat from '../../../src/ZooLabLibrary/Foods/Meat';

test('Should be able to get Meat', () => {
    expect(new Meat().FoodType).toBe('Meat');
});