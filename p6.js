// Function to find the character with maximum occurrence in a string and handling Unicode characters
function findMaxOccurrenceCharacter(input) {
    // Initialize an object to keep track of character counts
    let charCount = {};
    
    // Loop through each character in the input string
    for (let i = 0; i < input.length; i++) {
        let char = input[i];
        
        // Check if the character is not a whitespace or punctuation
        if (char !== ' ' && !isPunctuation(char)) {
            // Convert the character to its own key and count its occurrences
            if (charCount[char]) {
                charCount[char] += 1; // Increment count if it exists
            } else {
                charCount[char] = 1; // Initialize count if it does not exist
            }
        }
    }

    // Variables to keep track of the character with the maximum occurrence
    let maxChar = '';
    let maxCount = 0;

    // Find the character with the maximum occurrence
    for (let key in charCount) {
        if (charCount[key] > maxCount) {
            maxCount = charCount[key];
            maxChar = key; // Update the character
        }
    }

    // Return the character and its occurrence count
    return { character: maxChar, occurrence: maxCount };
}

// Helper function to check if a character is punctuation
function isPunctuation(char) {
    const punctuationChars = '.,!?"\'()[]{};:';
    return punctuationChars.includes(char);
}

// Example input
const inputString = "Hello, world!";
const result = findMaxOccurrenceCharacter(inputString);

// Log the result
console.log(`Character: '${result.character}', Occurrence: ${result.occurrence}`); 
