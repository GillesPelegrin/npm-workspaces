export default class Task  {
     message;
     creationDate;

    constructor(message, creationDate) {

    this.message = message;
    this.creationDate = creationDate ? creationDate : new Date();

    this.validate();
}

 validate() {
    isNotNullOrUndefined(this.message, 'Message should not be null or undefined')
}
}


export function isNotNullOrUndefined(object, errorMessage) {
    if (object === null || object === undefined) {
        throw new Error(errorMessage);
    }
}