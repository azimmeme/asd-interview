// Function to find the intersection of two lists
function findIntersection(list1, list2) {
    // Initialize an empty array to hold the intersection result
    let intersection = [];

    // Loop through the first list
    for (let i = 0; i < list1.length; i++) {
        // For each element in list1, check if it exists in list2
        for (let j = 0; j < list2.length; j++) {
            // If a match is found and it is not already in the intersection array
            if (list1[i] === list2[j] && !intersection.includes(list1[i])) {
                // Add the element to the intersection array
                intersection.push(list1[i]);
            }
        }
    }

    // Return the array containing the intersection of the two lists
    return intersection;
}

// Example lists
const list1 = [4, 5, 2, 3, 1, 6];
const list2 = [8, 7, 6, 9, 4, 5];

// Find the intersection and log the result
const result = findIntersection(list1, list2);
console.log(result); 
