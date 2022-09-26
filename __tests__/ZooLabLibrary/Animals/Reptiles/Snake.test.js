import { expect, test } from '@jest/globals';
import Snake from '../../../../src/ZooLabLibrary/Animals/Reptiles/Snake';
import Antibiotics from '../../../../src/ZooLabLibrary/Medicines/Antibiotics'
import AntiInflammatory from '../../../../src/ZooLabLibrary/Medicines/AntiInflammatory'
import Grass from '../../../../src/ZooLabLibrary/Foods/Grass'
import Meat from '../../../../src/ZooLabLibrary/Foods/Meat';

test('Should be able to create a snake', () => {
    const snake = new Snake({iD: 1, isSick: false, isHungry: false});
    expect(snake).toBeDefined();
});

test('Should be able to create a snake with a specific ID', () => {
    const snake = new Snake({iD: 100, isSick: false, isHungry: false});
    expect(snake.ID).toBe(100);
});

test('Should be able to create a healthy snake', () => {
    const snake = new Snake({iD: 1, isSick: false, isHungry: false});
    expect(snake.IsSick).toBe(false);
});

test('Should be able to crete a sick snake', () => {
    const snake = new Snake({iD: 1, isSick: true, isHungry: false});
    expect(snake.IsSick).toBe(true);
});

test('Should be able to crete a well-fed snake', () => {
    const snake = new Snake({iD: 1, isSick: false, isHungry: false });
    expect(snake.IsHungry).toBe(false);
});

test('Should be able to crete a hungry snake', () => {
    const snake = new Snake({iD: 1, isSick: false, isHungry: true });
    expect(snake.IsHungry).toBe(true);
});

test('Should be able to return required space SqFt for the snake', () => {
    const snake = new Snake({iD: 1, isSick: false, isHungry: false });
    expect(snake.RequiredSpaceSqFt).toBe(2);
});

test('Should be able to return favourite food for the snake', () => {
    const snake = new Snake({iD: 1, isSick: false, isHungry: false });
    expect(snake.FavouriteFood).toContain("Meat");
});

test('Should be able to define friendly animal for the snake', () => {
    const snake = new Snake({iD: 1, isSick: false, isHungry: false });
    expect(snake.IsFriendlyWith(new Snake({iD: 1, isSick: false, isHungry: false }))).toBe(true);
});

test('Should be able to set/get feed schedule for the snake', () => {
    const snake = new Snake({iD: 1, isSick: false, isHungry: false });
    let hours = [18, 21];
    snake.AddSchedule(hours);
    expect(snake.FeedSchedule).toContain(18);
    expect(snake.FeedSchedule).toContain(21);
});

test('Should be able to set/get feed feedTime for the snake', () => {
    const snake = new Snake({iD: 1, isSick: false, isHungry: false });
    let feedTime = new Date('2022-10-10');
    snake.FeedTimes = [feedTime];
    expect(snake.FeedTimes).toContain(feedTime);
});

test('Should be able to not feed snake', () => {
    const snake = new Snake({iD: 1, isSick: false, isHungry: true});
    const grass = new Grass();
    snake.Feed(grass);
    expect(snake.IsHungry).toBe(true);
});

test('Should be able to feed snake', () => {
    const snake = new Snake({iD: 1, isSick: false, isHungry: true});
    const meat = new Meat();
    snake.Feed(meat);
    expect(snake.IsHungry).toBe(false);
});

test('Should be able to heal snake', () => {
    const snake = new Snake({iD: 1, isSick: true, isHungry: false});
    const antibiotics = new Antibiotics();
    snake.Heal(antibiotics);
    expect(snake.IsSick).toBe(false);
});

test('Should be able to not heal snake', () => {
    const snake = new Snake({iD: 1, isSick: true, isHungry: false});
    const antiInflammatory = new AntiInflammatory();
    snake.Heal(antiInflammatory);
    expect(snake.IsSick).toBe(true);
});