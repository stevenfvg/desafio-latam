// Variable declaration with types in TypeScript.

// String:
let name: string = "Juan";
console.log(`Name: ${name}`);

// Number:
let age: number = 25;
console.log(`Age: ${age}`);

// Boolean:
let isStudent: boolean = true;
console.log(`Is student?: ${isStudent}`);

// Array of numbers:
let scores: number[] = [90, 85, 78];
console.log(`Scores: ${scores.join(", ")}`);

// Array of strings:
let colors: Array<string> = ["red", "blue", "green"];
console.log(`Colors: ${colors.join(", ")}`);

// Tuple (allows different types in the same variable):
let person: [string, number] = ["Maria", 30];
console.log(`Person: Name - ${person[0]}, Age - ${person[1]}`);

// Enum (defines a set of constant values):
enum Role {
    Admin,
    User,
    Guest,
}
let userRole: Role = Role.User;
console.log(`User role: ${Role[userRole]}`);

// Any (can hold any type of data, but it's best to avoid using it):
let randomValue: any = "Hello";
console.log(`Random value: ${randomValue}`);
randomValue = 42;
console.log(`New random value: ${randomValue}`);

// Unknown (similar to any, but with more restrictions):
let unknownValue: unknown = "Unknown text";
console.log(`Unknown value: ${unknownValue}`);

// Object:
let personInfo: { name: string; age: number } = { name: "Carlos", age: 40 };
console.log(`Person info: ${JSON.stringify(personInfo)}`);

// Function with return type:
function greet(name: string): string {
    return `Hello, ${name}`;
}
console.log(greet("Ana"));

// Void (when a function does not return anything):
function logMessage(message: string): void {
    console.log(`Message: ${message}`);
}
logMessage("This is a message in TypeScript");

// Never (for functions that never end):
function throwError(errorMsg: string): never {
    throw new Error(errorMsg);
}

// Union Type (can be one of multiple types):
let id: string | number;
id = 123; // Valid
id = "ABC123"; // Also valid
console.log(`ID: ${id}`);
