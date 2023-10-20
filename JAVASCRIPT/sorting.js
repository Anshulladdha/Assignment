function bubbleSortDescending(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

const myArray = [12, 34, 7, 23, 32, 5, 62, 3];

console.log("Original Array: " + myArray);

bubbleSortDescending(myArray);

console.log("Sorted Array in Descending Order: " + myArray);
