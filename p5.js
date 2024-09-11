// Function to find the symmetric difference between two lists
function findSymmetricDifference(list1, list2) {
    // Initialize an empty array to hold the symmetric difference result
    let symmetricDifference = [];

    // Loop through the first list
    for (let i = 0; i < list1.length; i++) {
        // If the current element is not in list2, add it to the result
        if (!contains(list2, list1[i])) {
            symmetricDifference.push(list1[i]);
        }
    }

    // Loop through the second list
    for (let j = 0; j < list2.length; j++) {
        // If the current element is not in list1, add it to the result
        if (!contains(list1, list2[j])) {
            symmetricDifference.push(list2[j]);
        }
    }

    // Sort the symmetric difference array in ascending order
    for (let k = 0; k < symmetricDifference.length - 1; k++) {
        for (let l = k + 1; l < symmetricDifference.length; l++) {
            if (symmetricDifference[k] > symmetricDifference[l]) {
                // Swap the elements
                let temp = symmetricDifference[k];
                symmetricDifference[k] = symmetricDifference[l];
                symmetricDifference[l] = temp;
            }
        }
    }

    // Return the sorted array containing the symmetric difference of the two lists
    return symmetricDifference;
}

// Helper function to check if an array contains a specific value
function contains(arr, value) {
    for (let k = 0; k < arr.length; k++) {
        if (arr[k] === value) {
            return true; // Value found
        }
    }
    return false; // Value not found
}

// Example lists
const list1 = [4, 5, 2, 3, 1, 6];
const list2 = [8, 7, 6, 9, 4, 5];

// Find the symmetric difference and log the result
const result = findSymmetricDifference(list1, list2);
console.log(result); 
