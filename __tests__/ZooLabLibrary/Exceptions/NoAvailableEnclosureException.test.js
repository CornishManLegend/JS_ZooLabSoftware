import { expect, test } from '@jest/globals';
import NoAvailableEnclosureException from '../../../src/ZooLabLibrary/Exceptions/NoAvailableEnclosureException';

test('Should be able to create a NoAvailableEnclosureException', () => {
    const noAvailableEnclosureException = new NoAvailableEnclosureException();
    expect(noAvailableEnclosureException).toBeDefined();
});