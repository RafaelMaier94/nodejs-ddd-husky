class ObligatoryValueException extends Error {
    constructor(message: string) {
        super(message); // Pass the message to the Error constructor
        this.name = 'ObligatoryValueException'; // Set the name property to the class name

        // Set the prototype explicitly for built-in error inheritance in TypeScript
        Object.setPrototypeOf(this, ObligatoryValueException.prototype);
    }
}

export { ObligatoryValueException };