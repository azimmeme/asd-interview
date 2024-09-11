// Function to implement FizzBuzz
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        // Check if divisible by both 3 and 5
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        // Check if divisible by 3
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        // Check if divisible by 5
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        // Otherwise, print the number
        else {
            console.log(i);
        }
    }
}

// Call the fizzBuzz function to print the output
fizzBuzz();
