import Animal from '../Animal';

export default class Bird extends Animal {

    constructor({ iD, isSick, isHungry }) {
        super({ iD });
        if (this.constructor.name === 'Bird') {
            throw new Error(`${this.constructor.name}: can not create instance of abstract class`);
        }

        if (typeof isSick == "boolean"){
            this.IsSick = isSick;
        }
        if (typeof isHungry == "boolean"){
            this.IsHungry = isHungry;
        }
    }
}