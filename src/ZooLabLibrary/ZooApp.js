// using System;
// using ZooLabLibrary.Console;
//
// namespace ZooLabLibrary
// {
//     public class ZooApp
// {
//     private List<Zoo> zoos = new List<Zoo>();
//
//     public IConsole Console { get; set; } = new DefaultConsole();
//
//     public void AddZoo(Zoo zoo)
//     {
//         zoos.Add(zoo);
//
//         Console.WriteLine("New zoo located in " + zoo.Location + " added to Zoo Corporation");
//     }
//
//     public List<Zoo> GetZoos()
//     {
//         return zoos;
//     }
// }
// }
import Zoo from './Zoo'
import Logger from './Logger'

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