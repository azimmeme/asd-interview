// Function to implement selection sort
function selectionSort(arr) {
    // Loop over each element in the array
    for (let i = 0; i < arr.length - 1; i++) {
        // Assume the current element is the smallest
        let minIndex = i;
        
        // Find the index of the smallest element in the unsorted portion
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the smallest found element with the first unsorted element
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

// Input list of numbers
const input = [21, 400, 8, -3, 77, 99, -16, 55, 111, -36, 28];

// Sorting the list
const sortedArray = selectionSort(input);

// Printing the sorted array
console.log("Sorted Output:", sortedArray);
