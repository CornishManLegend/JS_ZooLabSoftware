import { expect, test } from '@jest/globals';
import AntiDepression from '../../../src/ZooLabLibrary/Medicines/AntiDepression';

test('Should be able to get AntiDepression', () => {
    expect(new AntiDepression().MedicineType).toBe('AntiDepression');
});