export default class Animal {

    requiredSpaceSqFt = 1;
    favouriteFood = [""];
    feedTimes = [];
    feedSchedule = [9, 15];
    #ID;
    #IsSick = false;
    #IsHungry = false;

    constructor({ iD }) {
        if (this.constructor.name === 'Animal') {
            throw new Error(`${this.constructor.name}: can not create instance of abstract class`);
        }
        this.#ID = iD;
    }

    get ID() {
        return this.#ID;
    }

    get RequiredSpaceSqFt() {
        return this.requiredSpaceSqFt;
    }

    get FavouriteFood() {
        return this.favouriteFood;
    }

    get FeedTimes() {
        return this.feedTimes;
    }

    set FeedTimes(feedTime) {
        if(Object.prototype.toString.call(feedTime)){
            this.feedTimes = [...this.feedTimes, ...feedTime];
        }
    }

    get FeedSchedule() {
        return this.feedSchedule;
    }

    AddSchedule(hours)
    {
        this.feedSchedule = [...this.feedSchedule, ...hours];
    }

    get IsSick() {
        return this.#IsSick;
    }

    set IsSick(isSick) {
        if (typeof isSick == "boolean")
            this.#IsSick = isSick;
    }

    get IsHungry() {
        return this.#IsHungry;
    }

    set IsHungry(isHungry) {
        if (typeof isHungry == "boolean")
            this.#IsHungry = isHungry;
    }

    // IsFriendlyWith(animal){}
    //
    // Feed(food) { }
    //
    // Heal(medicine) { }
}
