import { expect, test } from '@jest/globals'
import Zoo from '../../src/ZooLabLibrary/Zoo'
import ZooApp from '../../src/ZooLabLibrary/ZooApp'

test('Should be able to create a ZooApp', () => {
    let zooApp = new ZooApp();
    expect(zooApp).toBeDefined();
});

test('Should be able to get/set ZooApp', () => {
    let zooApp = new ZooApp();
    zooApp.AddZoo(new Zoo({location: "New York"}));
    zooApp.AddZoo(new Zoo({location: "Los Angeles"}));
    expect(zooApp.GetZoos().length).toBe(2);
});