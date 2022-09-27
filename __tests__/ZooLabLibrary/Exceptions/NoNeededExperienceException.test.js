import { expect, test } from '@jest/globals';
import NoNeededExperienceException from '../../../src/ZooLabLibrary/Exceptions/NoNeededExperienceException'

test('Should be able to create a NoAvailableEnclosureException', () => {
    const noNeededExperienceException = new NoNeededExperienceException();
    expect(noNeededExperienceException).toBeDefined();
});