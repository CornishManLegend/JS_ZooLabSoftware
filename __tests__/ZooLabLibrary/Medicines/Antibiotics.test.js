import { expect, test } from '@jest/globals';
import Antibiotics from '../../../src/ZooLabLibrary/Medicines/Antibiotics';

test('Should be able to get Antibiotics', () => {
    expect(new Antibiotics().MedicineType).toBe('Antibiotics');
});