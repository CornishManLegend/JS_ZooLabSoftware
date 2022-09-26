import { expect, test } from '@jest/globals';
import Penguin from '../../../../src/ZooLabLibrary/Animals/Birds/Penguin';
import Vegetable from '../../../../src/ZooLabLibrary/Foods/Vegetable';
import Meat from '../../../../src/ZooLabLibrary/Foods/Meat';
import AntiDepression from '../../../../src/ZooLabLibrary/Medicines/AntiDepression'
import AntiInflammatory from '../../../../src/ZooLabLibrary/Medicines/AntiInflammatory'


test('Should be able to create a penguin', () => {
    const penguin = new Penguin({iD: 1, isSick: false, isHungry: false});
    expect(penguin).toBeDefined();
});

test('Should be able to create a penguin with a specific ID', () => {
    const penguin = new Penguin({iD: 100, isSick: false, isHungry: false});
    expect(penguin.ID).toBe(100);
});

test('Should be able to create a healthy penguin', () => {
    const penguin = new Penguin({iD: 1, isSick: false, isHungry: false});
    expect(penguin.IsSick).toBe(false);
});

test('Should be able to crete a sick penguin', () => {
    const penguin = new Penguin({iD: 1, isSick: true, isHungry: false});
    expect(penguin.IsSick).toBe(true);
});

test('Should be able to crete a well-fed penguin', () => {
    const penguin = new Penguin({iD: 1, isSick: false, isHungry: false});
    expect(penguin.IsHungry).toBe(false);
});

test('Should be able to crete a hungry penguin', () => {
    const penguin = new Penguin({iD: 1, isSick: false, isHungry: true});
    expect(penguin.IsHungry).toBe(true);
});

test('Should be able to return required space SqFt for the penguin', () => {
    const penguin = new Penguin({iD: 1, isSick: false, isHungry: false});
    expect(penguin.RequiredSpaceSqFt).toBe(10);
});

test('Should be able to return favourite food for the penguin', () => {
    const penguin = new Penguin({iD: 1, isSick: false, isHungry: false});
    expect(penguin.FavouriteFood).toContain("Vegetable");
    expect(penguin.FavouriteFood).toContain("Grass");
});

test('Should be able to define friendly animal for the penguin', () => {
    const penguin = new Penguin({iD: 1, isSick: false, isHungry: false});
    expect(penguin.IsFriendlyWith(new Penguin({iD: 1, isSick: false, isHungry: false }))).toBe(true);
});

test('Should be able to set/get feed schedule for the penguin', () => {
    const penguin = new Penguin({iD: 1, isSick: false, isHungry: false});
    let hours = [18, 21];
    penguin.AddSchedule(hours);
    expect(penguin.FeedSchedule).toContain(18);
    expect(penguin.FeedSchedule).toContain(21);
});

test('Should be able to set/get feed feedTime for the penguin', () => {
    const penguin = new Penguin({iD: 1, isSick: false, isHungry: false});
    let feedTime = new Date('2022-10-10');
    penguin.FeedTimes = [feedTime];
    expect(penguin.FeedTimes).toContain(feedTime);
});

test('Should be able to feed penguin', () => {
    const penguin = new Penguin({iD: 1, isSick: false, isHungry: true});
    const vegetable = new Vegetable();
    penguin.Feed(vegetable);
    expect(penguin.IsHungry).toBe(false);
});

test('Should be able to not feed penguin', () => {
    const penguin = new Penguin({iD: 1, isSick: false, isHungry: true});
    const meat = new Meat();
    penguin.Feed(meat);
    expect(penguin.IsHungry).toBe(true);
});

test('Should be able to heal penguin', () => {
    const penguin = new Penguin({iD: 1, isSick: true, isHungry: false});
    const antiInflammatory = new AntiInflammatory();
    penguin.Heal(antiInflammatory);
    expect(penguin.IsSick).toBe(false);
});

test('Should be able to not heal penguin', () => {
    const penguin = new Penguin({iD: 1, isSick: true, isHungry: false});
    const antiDepression = new AntiDepression();
    penguin.Heal(antiDepression);
    expect(penguin.IsSick).toBe(true);
});