import { expect, test } from '@jest/globals';
import Elephant from '../../../../src/ZooLabLibrary/Animals/Mammals/Elephant'
import Parrot from '../../../../src/ZooLabLibrary/Animals/Birds/Parrot';
import Bison from '../../../../src/ZooLabLibrary/Animals/Mammals/Bison';
import Turtle from '../../../../src/ZooLabLibrary/Animals/Reptiles/Turtle';
import Antibiotics from '../../../../src/ZooLabLibrary/Medicines/Antibiotics'
import AntiInflammatory from '../../../../src/ZooLabLibrary/Medicines/AntiInflammatory'
import Grass from '../../../../src/ZooLabLibrary/Foods/Grass'
import Meat from '../../../../src/ZooLabLibrary/Foods/Meat';

test('Should be able to create an elephant', () => {
    const elephant = new Elephant({iD: 1, isSick: false, isHungry: false});
    expect(elephant).toBeDefined();
});

test('Should be able to create an elephant with a specific ID', () => {
    const elephant = new Elephant({iD: 100, isSick: false, isHungry: false});
    expect(elephant.ID).toBe(100);
});

test('Should be able to create a healthy elephant', () => {
    const elephant = new Elephant({iD: 1, isSick: false, isHungry: false});
    expect(elephant.IsSick).toBe(false);
});

test('Should be able to crete a sick elephant', () => {
    const elephant = new Elephant({iD: 1, isSick: true, isHungry: false});
    expect(elephant.IsSick).toBe(true);
});

test('Should be able to crete a well-fed elephant', () => {
    const elephant = new Elephant({iD: 1, isSick: false, isHungry: false });
    expect(elephant.IsHungry).toBe(false);
});

test('Should be able to crete a hungry elephant', () => {
    const elephant = new Elephant({iD: 1, isSick: false, isHungry: true });
    expect(elephant.IsHungry).toBe(true);
});

test('Should be able to return required space SqFt for the elephant', () => {
    const elephant = new Elephant({iD: 1, isSick: false, isHungry: false });
    expect(elephant.RequiredSpaceSqFt).toBe(1000);
});

test('Should be able to return favourite food for the elephant', () => {
    const elephant = new Elephant({iD: 1, isSick: false, isHungry: false });
    expect(elephant.FavouriteFood).toContain("Grass");
    expect(elephant.FavouriteFood).toContain("Vegetable");
});

test('Should be able to define friendly animal for the elephant', () => {
    const elephant = new Elephant({iD: 1, isSick: false, isHungry: false });
    expect(elephant.IsFriendlyWith(new Elephant({iD: 1, isSick: false, isHungry: false }))).toBe(true);
    expect(elephant.IsFriendlyWith(new Bison({iD: 1, isSick: false, isHungry: false }))).toBe(true);
    expect(elephant.IsFriendlyWith(new Parrot({iD: 1, isSick: false, isHungry: false }))).toBe(true);
    expect(elephant.IsFriendlyWith(new Turtle({iD: 1, isSick: false, isHungry: false }))).toBe(true);
});

test('Should be able to set/get feed schedule for the elephant', () => {
    const elephant = new Elephant({iD: 1, isSick: false, isHungry: false });
    let hours = [18, 21];
    elephant.AddSchedule(hours);
    expect(elephant.FeedSchedule).toContain(18);
    expect(elephant.FeedSchedule).toContain(21);
});

test('Should be able to set/get feed feedTime for the elephant', () => {
    const elephant = new Elephant({iD: 1, isSick: false, isHungry: false });
    let feedTime = new Date('2022-10-10');
    elephant.FeedTimes = [feedTime];
    expect(elephant.FeedTimes).toContain(feedTime);
});

test('Should be able to feed elephant', () => {
    const elephant = new Elephant({iD: 1, isSick: false, isHungry: true});
    const grass = new Grass();
    elephant.Feed(grass);
    expect(elephant.IsHungry).toBe(false);
});

test('Should be able to not feed elephant', () => {
    const elephant = new Elephant({iD: 1, isSick: false, isHungry: true});
    const meat = new Meat();
    elephant.Feed(meat);
    expect(elephant.IsHungry).toBe(true);
});

test('Should be able to heal elephant', () => {
    const elephant = new Elephant({iD: 1, isSick: true, isHungry: false});
    const antibiotics = new Antibiotics();
    elephant.Heal(antibiotics);
    expect(elephant.IsSick).toBe(false);
});

test('Should be able to not heal elephant', () => {
    const elephant = new Elephant({iD: 1, isSick: true, isHungry: false});
    const antiInflammatory = new AntiInflammatory();
    elephant.Heal(antiInflammatory);
    expect(elephant.IsSick).toBe(true);
});