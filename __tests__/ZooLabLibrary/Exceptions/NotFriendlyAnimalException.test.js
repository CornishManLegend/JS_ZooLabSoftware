import { expect, test } from '@jest/globals';
import NotFriendlyAnimalException from '../../../src/ZooLabLibrary/Exceptions/NotFriendlyAnimalException'

test('Should be able to create a NoAvailableEnclosureException', () => {
    const notFriendlyAnimalException = new NotFriendlyAnimalException();
    expect(notFriendlyAnimalException).toBeDefined();
});