import { expect, test } from '@jest/globals';
import Logger from '../../src/ZooLabLibrary/Logger'

test('Should be able to write a log', () => {
    Logger.writeLine('test log');
    expect(Logger.logs).toContain('test log');
});