// Example of how to use let and const variables and their scope.
function scopeExample() {
    // Using let for a variable with scope inside the function.
    let x = 10;
    console.log('Initial value of x:', x); // Output: Initial value of x within the function = 10.

    if (true) {
        // Using const for a variable with block scope.
        const y = 20;
        console.log('Value of y:', y); // Output: Initial value of y within the if = 20 block.

        // Reassigning value to the let variable within the block.
        x = 30;
        console.log('Updated value of x:', x); // Output: Updated value of x within the if = 30 block.

        // Reassigning the const variable inside the block (will result in an error).
        // y = 40; // Error: Assignment to a constant variable.
    }

    console.log('Final value of x:', x); // Output: Final value of x outside the if = 30 block.
}

scopeExample();