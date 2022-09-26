import { expect, test } from '@jest/globals';
import Lion from '../../../../src/ZooLabLibrary/Animals/Mammals/Lion';
import Antibiotics from '../../../../src/ZooLabLibrary/Medicines/Antibiotics'
import AntiInflammatory from '../../../../src/ZooLabLibrary/Medicines/AntiInflammatory'
import Grass from '../../../../src/ZooLabLibrary/Foods/Grass'
import Meat from '../../../../src/ZooLabLibrary/Foods/Meat';

test('Should be able to create a lion', () => {
    const lion = new Lion({iD: 1, isSick: false, isHungry: false});
    expect(lion).toBeDefined();
});

test('Should be able to create a lion with a specific ID', () => {
    const lion = new Lion({iD: 100, isSick: false, isHungry: false});
    expect(lion.ID).toBe(100);
});

test('Should be able to create a healthy lion', () => {
    const lion = new Lion({iD: 1, isSick: false, isHungry: false});
    expect(lion.IsSick).toBe(false);
});

test('Should be able to crete a sick lion', () => {
    const lion = new Lion({iD: 1, isSick: true, isHungry: false});
    expect(lion.IsSick).toBe(true);
});

test('Should be able to crete a well-fed lion', () => {
    const lion = new Lion({iD: 1, isSick: false, isHungry: false });
    expect(lion.IsHungry).toBe(false);
});

test('Should be able to crete a hungry lion', () => {
    const lion = new Lion({iD: 1, isSick: false, isHungry: true });
    expect(lion.IsHungry).toBe(true);
});

test('Should be able to return required space SqFt for the lion', () => {
    const lion = new Lion({iD: 1, isSick: false, isHungry: false });
    expect(lion.RequiredSpaceSqFt).toBe(1000);
});

test('Should be able to return favourite food for the lion', () => {
    const lion = new Lion({iD: 1, isSick: false, isHungry: false });
    expect(lion.FavouriteFood).toContain("Meat");
});

test('Should be able to define friendly animal for the lion', () => {
    const lion = new Lion({iD: 1, isSick: false, isHungry: false });
    expect(lion.IsFriendlyWith(new Lion({iD: 1, isSick: false, isHungry: false }))).toBe(true);
});

test('Should be able to set/get feed schedule for the lion', () => {
    const lion = new Lion({iD: 1, isSick: false, isHungry: false });
    let hours = [18, 21];
    lion.AddSchedule(hours);
    expect(lion.FeedSchedule).toContain(18);
    expect(lion.FeedSchedule).toContain(21);
});

test('Should be able to set/get feed feedTime for the lion', () => {
    const lion = new Lion({iD: 1, isSick: false, isHungry: false });
    let feedTime = new Date('2022-10-10');
    lion.FeedTimes = [feedTime];
    expect(lion.FeedTimes).toContain(feedTime);
});

test('Should be able to not feed lion', () => {
    const lion = new Lion({iD: 1, isSick: false, isHungry: true});
    const grass = new Grass();
    lion.Feed(grass);
    expect(lion.IsHungry).toBe(true);
});

test('Should be able to feed lion', () => {
    const lion = new Lion({iD: 1, isSick: false, isHungry: true});
    const meat = new Meat();
    lion.Feed(meat);
    expect(lion.IsHungry).toBe(false);
});

test('Should be able to heal lion', () => {
    const lion = new Lion({iD: 1, isSick: true, isHungry: false});
    const antibiotics = new Antibiotics();
    lion.Heal(antibiotics);
    expect(lion.IsSick).toBe(false);
});

test('Should be able to not heal lion', () => {
    const lion = new Lion({iD: 1, isSick: true, isHungry: false});
    const antiInflammatory = new AntiInflammatory();
    lion.Heal(antiInflammatory);
    expect(lion.IsSick).toBe(true);
});