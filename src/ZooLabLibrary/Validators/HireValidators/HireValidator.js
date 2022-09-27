export default class HireValidator {
    constructor() {
        if (this.constructor.name === 'HireValidator') {
            throw new Error(`Can not create instance of abstract class - ${this.constructor.name}`);
        }
    }
}
