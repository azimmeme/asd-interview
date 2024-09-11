// Function to check if two strings are anagrams of each other
function areAnagrams(str1, str2) {
    // Helper function to clean and normalize the input strings
    function normalizeString(str) {
        return str
            .replace(/[^\w]/g, '') // Remove punctuation and whitespace
            .toLowerCase();        // Convert to lowercase
    }

    // Normalize both input strings
    const normalizedStr1 = normalizeString(str1);
    const normalizedStr2 = normalizeString(str2);

    // If the lengths differ, they cannot be anagrams
    if (normalizedStr1.length !== normalizedStr2.length) {
        return false;
    }

    // Create frequency count objects for both strings
    const charCount1 = {};
    const charCount2 = {};

    // Count the frequency of each character in the first string
    for (const char of normalizedStr1) {
        charCount1[char] = (charCount1[char] || 0) + 1;
    }

    // Count the frequency of each character in the second string
    for (const char of normalizedStr2) {
        charCount2[char] = (charCount2[char] || 0) + 1;
    }

    // Compare the character counts
    for (const char in charCount1) {
        if (charCount1[char] !== charCount2[char]) {
            return false; // Character counts do not match
        }
    }

    // If all character counts match, the strings are anagrams
    return true;
}

// Example inputs
const examples = [
    { str1: "listen", str2: "silent" },
    { str1: "debit card", str2: "Bad credit" },
    { str1: "hello", str2: "bye" },
    { str1: "restful", str2: "fluster" },
    { str1: "listen", str2: "silentt" },
    { str1: "Conversation", str2: "Voices, rant on" },
];

// Test the examples and log results
examples.forEach(({ str1, str2 }) => {
    const result = areAnagrams(str1, str2);
    console.log(`"${str1}" and "${str2}" are anagrams: ${result}`);
});
