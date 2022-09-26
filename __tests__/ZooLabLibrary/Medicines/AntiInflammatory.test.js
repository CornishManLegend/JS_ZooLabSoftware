import { expect, test } from '@jest/globals';
import AntiInflammatory from '../../../src/ZooLabLibrary/Medicines/AntiInflammatory';

test('Should be able to get AntiInflammatory', () => {
    expect(new AntiInflammatory().MedicineType).toBe('AntiInflammatory');
});