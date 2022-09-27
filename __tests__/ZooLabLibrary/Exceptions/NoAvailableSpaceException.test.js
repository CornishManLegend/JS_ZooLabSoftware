import { expect, test } from '@jest/globals';
import NoAvailableSpaceException from '../../../src/ZooLabLibrary/Exceptions/NoAvailableSpaceException';

test('Should be able to create a NoAvailableEnclosureException', () => {
    const noAvailableSpaceException = new NoAvailableSpaceException();
    expect(noAvailableSpaceException).toBeDefined();
});
