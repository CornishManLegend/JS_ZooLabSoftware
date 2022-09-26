import { expect, test } from '@jest/globals';
import Elephant from '../../../../src/ZooLabLibrary/Animals/Mammals/Elephant'
import Bison from '../../../../src/ZooLabLibrary/Animals/Mammals/Bison'
import Parrot from '../../../../src/ZooLabLibrary/Animals/Birds/Parrot';
import Turtle from '../../../../src/ZooLabLibrary/Animals/Reptiles/Turtle';
import Antibiotics from '../../../../src/ZooLabLibrary/Medicines/Antibiotics'
import AntiInflammatory from '../../../../src/ZooLabLibrary/Medicines/AntiInflammatory'
import Vegetable from '../../../../src/ZooLabLibrary/Foods/Vegetable'
import Meat from '../../../../src/ZooLabLibrary/Foods/Meat';

test('Should be able to create a turtle', () => {
    const turtle = new Turtle({iD: 1, isSick: false, isHungry: false});
    expect(turtle).toBeDefined();
});

test('Should be able to create a turtle with a specific ID', () => {
    const turtle = new Turtle({iD: 100, isSick: false, isHungry: false});
    expect(turtle.ID).toBe(100);
});

test('Should be able to create a healthy turtle', () => {
    const turtle = new Turtle({iD: 1, isSick: false, isHungry: false});
    expect(turtle.IsSick).toBe(false);
});

test('Should be able to crete a sick turtle', () => {
    const turtle = new Turtle({iD: 1, isSick: true, isHungry: false});
    expect(turtle.IsSick).toBe(true);
});

test('Should be able to crete a well-fed turtle', () => {
    const turtle = new Turtle({iD: 1, isSick: false, isHungry: false });
    expect(turtle.IsHungry).toBe(false);
});

test('Should be able to crete a hungry turtle', () => {
    const turtle = new Turtle({iD: 1, isSick: false, isHungry: true });
    expect(turtle.IsHungry).toBe(true);
});

test('Should be able to return required space SqFt for the turtle', () => {
    const turtle = new Turtle({iD: 1, isSick: false, isHungry: false });
    expect(turtle.RequiredSpaceSqFt).toBe(5);
});

test('Should be able to return favourite food for the turtle', () => {
    const turtle = new Turtle({iD: 1, isSick: false, isHungry: false });
    expect(turtle.FavouriteFood).toContain("Vegetable");
});

test('Should be able to define friendly animal for the turtle', () => {
    const turtle = new Turtle({iD: 1, isSick: false, isHungry: false });
    expect(turtle.IsFriendlyWith(new Turtle({iD: 1, isSick: false, isHungry: false }))).toBe(true);
    expect(turtle.IsFriendlyWith(new Parrot({iD: 1, isSick: false, isHungry: false }))).toBe(true);
    expect(turtle.IsFriendlyWith(new Bison({iD: 1, isSick: false, isHungry: false }))).toBe(true);
    expect(turtle.IsFriendlyWith(new Elephant({iD: 1, isSick: false, isHungry: false }))).toBe(true);
});

test('Should be able to set/get feed schedule for the turtle', () => {
    const turtle = new Turtle({iD: 1, isSick: false, isHungry: false });
    let hours = [18, 21];
    turtle.AddSchedule(hours);
    expect(turtle.FeedSchedule).toContain(18);
    expect(turtle.FeedSchedule).toContain(21);
});

test('Should be able to set/get feed feedTime for the turtle', () => {
    const turtle = new Turtle({iD: 1, isSick: false, isHungry: false });
    let feedTime = new Date('2022-10-10');
    turtle.FeedTimes = [feedTime];
    expect(turtle.FeedTimes).toContain(feedTime);
});

test('Should be able to feed turtle', () => {
    const turtle = new Turtle({iD: 1, isSick: false, isHungry: true});
    const vegetable = new Vegetable();
    turtle.Feed(vegetable);
    expect(turtle.IsHungry).toBe(false);
});

test('Should be able to not feed turtle', () => {
    const turtle = new Turtle({iD: 1, isSick: false, isHungry: true});
    const meat = new Meat();
    turtle.Feed(meat);
    expect(turtle.IsHungry).toBe(true);
});

test('Should be able to heal turtle', () => {
    const turtle = new Turtle({iD: 1, isSick: true, isHungry: false});
    const antibiotics = new Antibiotics();
    turtle.Heal(antibiotics);
    expect(turtle.IsSick).toBe(false);
});

test('Should be able to not heal turtle', () => {
    const turtle = new Turtle({iD: 1, isSick: true, isHungry: false});
    const antiInflammatory = new AntiInflammatory();
    turtle.Heal(antiInflammatory);
    expect(turtle.IsSick).toBe(true);
});