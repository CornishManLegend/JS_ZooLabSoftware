export default class Logger {

    static logs = [];

    static writeLine(message) {
        this.logs.push(message);
    }
}