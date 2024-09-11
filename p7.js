// Function to calculate the square root of a non-negative integer x
function calculateSquareRoot(x) {
    // Edge case for 0
    if (x === 0) return 0;

    // Initialize left and right pointers for binary search
    let left = 1; // Start from 1 as sqrt(0) is already handled
    let right = x;

    while (left <= right) {
        // Calculate the midpoint
        let mid = Math.floor((left + right) / 2);

        // Calculate the square of mid
        let midSquared = mid * mid;

        // If mid squared is equal to x, we've found the square root
        if (midSquared === x) {
            return mid;
        } 
        // If mid squared is less than x, move the left pointer up
        else if (midSquared < x) {
            left = mid + 1;
        } 
        // If mid squared is greater than x, move the right pointer down
        else {
            right = mid - 1;
        }
    }

    // If the function reaches here, it means no perfect square was found
    return -1;
}

// Example usage
const x = 49; // Perfect square
const result = calculateSquareRoot(x);

// Log the result
console.log(`Square root of ${x} is: ${result}`);
