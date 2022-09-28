import Zoo from './Zoo.js'
import Logger from './Logger.js'

export default class ZooApp {

    #zoos = [];

    AddZoo(zoo) {
        if (zoo instanceof Zoo){
            this.#zoos.push(zoo)
            Logger.writeLine("New zoo located in " + zoo.Location + " added to Zoo Corporation");
        }
    }

    GetZoos(){
        return this.#zoos;
    }

}