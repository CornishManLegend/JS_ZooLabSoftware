import { expect, test } from '@jest/globals';
import Bison from '../../../../src/ZooLabLibrary/Animals/Mammals/Bison';
import Meat from '../../../../src/ZooLabLibrary/Foods/Meat';
import Antibiotics from '../../../../src/ZooLabLibrary/Medicines/Antibiotics'
import AntiInflammatory from '../../../../src/ZooLabLibrary/Medicines/AntiInflammatory'
import Elephant from '../../../../src/ZooLabLibrary/Animals/Mammals/Elephant'
import Grass from '../../../../src/ZooLabLibrary/Foods/Grass'

test('Should be able to create a bison', () => {
    const bison = new Bison({iD: 1, isSick: false, isHungry: false});
    expect(bison).toBeDefined();
});

test('Should be able to create a bison with a specific ID', () => {
    const bison = new Bison({iD: 100, isSick: false, isHungry: false});
    expect(bison.ID).toBe(100);
});

test('Should be able to create a healthy bison', () => {
    const bison = new Bison({iD: 1, isSick: false, isHungry: false});
    expect(bison.IsSick).toBe(false);
});

test('Should be able to crete a sick bison', () => {
    const bison = new Bison({iD: 1, isSick: true, isHungry: false});
    expect(bison.IsSick).toBe(true);
});

test('Should be able to crete a well-fed bison', () => {
    const bison = new Bison({iD: 1, isSick: false, isHungry: false });
    expect(bison.IsHungry).toBe(false);
});

test('Should be able to crete a hungry bison', () => {
    const bison = new Bison({iD: 1, isSick: false, isHungry: true });
    expect(bison.IsHungry).toBe(true);
});

test('Should be able to return required space SqFt for the bison', () => {
    const bison = new Bison({iD: 1, isSick: false, isHungry: false });
    expect(bison.RequiredSpaceSqFt).toBe(1000);
});

test('Should be able to return favourite food for the bison', () => {
    const bison = new Bison({iD: 1, isSick: false, isHungry: false });
    expect(bison.FavouriteFood).toContain("Grass");
});

test('Should be able to define friendly animal for the bison', () => {
    const bison = new Bison({iD: 1, isSick: false, isHungry: false });
    expect(bison.IsFriendlyWith(new Bison({iD: 1, isSick: false, isHungry: false }))).toBe(true);
    expect(bison.IsFriendlyWith(new Elephant({iD: 1, isSick: false, isHungry: false }))).toBe(true);
});

test('Should be able to set/get feed scheduale for the bison', () => {
    const bison = new Bison({iD: 1, isSick: false, isHungry: false });
    let hours = [18, 21];
    bison.AddSchedule(hours);
    expect(bison.FeedSchedule).toContain(18);
    expect(bison.FeedSchedule).toContain(21);
});

test('Should be able to set/get feed feedTime for the bison', () => {
    const bison = new Bison({iD: 1, isSick: false, isHungry: false });
    let feedTime = new Date('2022-10-10');
    bison.FeedTimes = [feedTime];
    expect(bison.FeedTimes).toContain(feedTime);
});

test('Should be able to feed bison', () => {
    const bison = new Bison({iD: 1, isSick: false, isHungry: true});
    const grass = new Grass();
    bison.Feed(grass);
    expect(bison.IsHungry).toBe(false);
});

test('Should be able to not feed bison', () => {
    const bison = new Bison({iD: 1, isSick: false, isHungry: true});
    const meat = new Meat();
    bison.Feed(meat);
    expect(bison.IsHungry).toBe(true);
});

test('Should be able to heal bison', () => {
    const bison = new Bison({iD: 1, isSick: true, isHungry: false});
    const antibiotics = new Antibiotics();
    bison.Heal(antibiotics);
    expect(bison.IsSick).toBe(false);
});

test('Should be able to not heal bison', () => {
    const bison = new Bison({iD: 1, isSick: true, isHungry: false});
    const antiInflammatory = new AntiInflammatory();
    bison.Heal(antiInflammatory);
    expect(bison.IsSick).toBe(true);
});