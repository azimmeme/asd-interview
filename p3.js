// Function to generate Fibonacci sequence recursively
function fibonacci(n) {
    // Base cases: return 0 for the first element and 1 for the second element
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    // Recursive call to calculate the nth Fibonacci number
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Function to generate the Fibonacci sequence up to a specified count
function generateFibonacciSequence(count) {
    let sequence = [];
    
    for (let i = 0; i < count; i++) {
        sequence.push(fibonacci(i));
    }
    
    return sequence;
}

// Generate the first 10 Fibonacci numbers
const numOfElements = 10; 
const result = generateFibonacciSequence(numOfElements);

console.log(result.join(", "));
