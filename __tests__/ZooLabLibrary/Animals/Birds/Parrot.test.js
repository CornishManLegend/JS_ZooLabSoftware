import { expect, test } from '@jest/globals';
import Parrot from '../../../../src/ZooLabLibrary/Animals/Birds/Parrot';
import Vegetable from '../../../../src/ZooLabLibrary/Foods/Vegetable';
import Meat from '../../../../src/ZooLabLibrary/Foods/Meat';
import AntiDepression from '../../../../src/ZooLabLibrary/Medicines/AntiDepression'
import AntiInflammatory from '../../../../src/ZooLabLibrary/Medicines/AntiInflammatory'

test('Should be able to create a Parrot', () => {
    const parrot = new Parrot({iD: 1, isSick: true, isHungry: true});
    expect(parrot).toBeDefined();
});

test('Should be able to create a parrot with a specific ID', () => {
    const parrot = new Parrot({iD: 100, isSick: false, isHungry: false});
    expect(parrot.ID).toBe(100);
});

test('Should be able to create a healthy parrot Parrot', () => {
    const parrot = new Parrot({iD: 1, isSick: false, isHungry: false});
    expect(parrot.IsSick).toBe(false);
});

test('Should be able to crete a sick Parrot', () => {
    const parrot = new Parrot({iD: 1, isSick: true, isHungry: false});
    expect(parrot.IsSick).toBe(true);
});

test('Should be able to crete a well-fed Parrot', () => {
    const parrot = new Parrot({iD: 1, isSick: false, isHungry: false });
    expect(parrot.IsHungry).toBe(false);
});

test('Should be able to crete a hungry Parrot', () => {
    const parrot = new Parrot({iD: 1, isSick: false, isHungry: true });
    expect(parrot.IsHungry).toBe(true);
});

test('Should be able to return required space SqFt for the parrot', () => {
    const parrot = new Parrot({iD: 1, isSick: false, isHungry: false });
    expect(parrot.RequiredSpaceSqFt).toBe(5);
});

test('Should be able to return favourite food for the parrot', () => {
    const parrot = new Parrot({iD: 1, isSick: false, isHungry: false });
    expect(parrot.FavouriteFood).toContain("Vegetable");
});

test('Should be able to define friendly animal for the parrot', () => {
    const parrot = new Parrot({iD: 1, isSick: false, isHungry: false });
    expect(parrot.IsFriendlyWith(new Parrot({iD: 1, isSick: false, isHungry: false }))).toBe(true);
});

test('Should be able to set/get feed scheduale for the parrot', () => {
    const parrot = new Parrot({iD: 1, isSick: false, isHungry: false });
    let hours = [18, 21];
    parrot.AddSchedule(hours);
    expect(parrot.FeedSchedule).toContain(18);
    expect(parrot.FeedSchedule).toContain(21);
});

test('Should be able to set/get feed feedTime for the parrot', () => {
    const parrot = new Parrot({iD: 1, isSick: false, isHungry: false });
    let feedTime = new Date('2022-10-10');
    parrot.FeedTimes = [feedTime];
    expect(parrot.FeedTimes).toContain(feedTime);
});

test('Should be able to feed Parrot', () => {
    const parrot = new Parrot({iD: 1, isSick: false, isHungry: true});
    const vegetable = new Vegetable();
    parrot.Feed(vegetable);
    expect(parrot.IsHungry).toBe(false);
});

test('Should be able to not feed Parrot', () => {
    const parrot = new Parrot({iD: 1, isSick: false, isHungry: true});
    const meat = new Meat();
    parrot.Feed(meat);
    expect(parrot.IsHungry).toBe(true);
});

test('Should be able to heal Parrot', () => {
    const parrot = new Parrot({iD: 1, isSick: true, isHungry: false});
    const antiDepression = new AntiDepression();
    parrot.Heal(antiDepression);
    expect(parrot.IsSick).toBe(false);
});

test('Should be able to not heal Parrot', () => {
    const parrot = new Parrot({iD: 1, isSick: true, isHungry: false});
    const antiInflammatory = new AntiInflammatory();
    parrot.Heal(antiInflammatory);
    expect(parrot.IsSick).toBe(true);
});