import { expect, test } from '@jest/globals';
import Grass from '../../../src/ZooLabLibrary/Foods/Grass';

test('Should be able to get Grass', () => {
    expect(new Grass().FoodType).toBe('Grass');
});