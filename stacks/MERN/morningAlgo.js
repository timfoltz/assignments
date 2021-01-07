// ************************************** jan 4 2021 *************************************************

// MERN Algos Week 1 - Sorting Algorithms
// https://www.bigocheatsheet.com/


// Bubble Sort

// For every pair of adjacent indicies
// swap them if the item on the left is larger than the item on the right
// continue until array is fully sorted


function bubbleSort(arr) {
    for (let i=0;i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if (arr[i] < arr[j]){
                let temp = arr[j]
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr
}
  

console.log(bubbleSort([34, 23, 13, 9, -1, 12, 14]))


//second loop test the value and initiates a swap of indext
//conditional --

// Time Complexity
// - BEST: n when array is sorted
// - AVERAGE: O(n^2)
// - WORST: O(n^2)

// https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/



// Selection Sort


// Selection sort works by iterating through the list,
// finding the minimum value,
// and moving it to the beginning of the list.

// Then, ignoring the first position, which is now sorted, iterate through the list again
// finding the next minimum value and move it to index 1.
// This continues until all values are sorted.


function selectionSort(arr) {
    for (let i=0;i<arr.length;i++){
        let min = arr[i];
        for (j=0;j<arr.length;j++)
        if(arr[j] > min){
            let temp = arr[j];
            arr[j]=arr[i];
            arr[i]=temp;

        }
        
    }
    return arr
}

console.log(selectionSort([34,23,13, 9, -1, 12, 14]))
// Time Complexity
//   - Best: O(n^2)
//   - Average: O(n^2)
//   - Worst: O(n^2)


// ******************************************** solution
// MERN Algos Week 1 - Sorting Algorithms
// https://www.bigocheatsheet.com/


// Bubble Sort

// For every pair of adjacent indicies
// swap them if the item on the left is larger than the item on the right
// continue until array is fully sorted

function bubbleSort(arr) {
    var len = arr.length; // fix the length
    for (var i = 0; i < len; i++) { // loop over every element
        for (var j = 0; j < len - i - 1; j++) { // go no further than length - i
            // compare and classic swap
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    // return the given array
    return arr;
}


// Time Complexity
// - BEST: n when array is sorted
// - AVERAGE: O(n^2)
// - WORST: O(n^2)

// https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/



// Selection Sort


// Selection sort works by iterating through the list,
// finding the minimum value,
// and moving it to the beginning of the list.

// Then, ignoring the first position, which is now sorted, iterate through the list again
// finding the next minimum value and move it to index 1.
// This continues until all values are sorted.


function selectionSort(arr) {
    var len = arr.length; // fix the length
    for (var i = 0; i < len; i++) {
        var min = i; // arbitrarily set i as min
        for (var j = i + 1; j < len; j++) { // loop from i
            if (arr[min] > arr[j]) {
                min = j;
            }
            if (min !== i) {
                var temp = arr[i];
                arr[i] = arr[min];
                arr[min] = temp;
            }
        }
    }
    return arr;
}

// Time Complexity
//   - Best: O(n^2)
//   - Average: O(n^2)
//   - Worst: O(n^2)

// https://www.programmingsimplified.com/images/c/selection-sort.png


// ************************************** jan 5 2021 *************************************************

const numbers1  = [9,6,5,3,1,8,7,2,4];
const numbers2  = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(arr){
    for(let i=1; i<arr.length; i++){
        while(i>0 && arr[i-1] > arr[i]){
        //swap
        [arr[i-1], arr[i]]=[arr[i], arr[i-1]];
        i--;
        }
    }
    return arr
}
console.log(insertionSort(numbers1));
console.log(insertionSort(numbers2));
// ********************************************solution
// http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2140
// Array: Insertion Sort

// visualization with playing cards (scroll down):
// https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort

// array / bar visualization:
// https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/

// shifting
function insertionSort(arr) {
    var len = arr.length;
    for (var i = 1; i < len; i++) {

        // save the current element
        var temp = arr[i];

        // save the previous index
        var j = i - 1;

        // while j is within the bounds of the array
        // and that element is larger than temp
        while (j >= 0 && arr[j] > temp) {
            // shift to the left and decrement j
            arr[j + 1] = arr[j];
            j--;
        }
        // when the loop completes, move the temp into the proper location
        arr[j + 1] = temp;
    }
    return arr;
};
//  j
//[ 2, 3, 4, 6, 20]
//               2 temp

// swapping
const insertionSortDestructuredSwap = (arr) => {
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        // hold the index instead of the temp
        let idx = i;
        let j = i - 1;
        // compare with indexes
        while (j >= 0 && arr[j] > arr[idx]) {
            // swap in one line
            [arr[j], arr[idx]] = [arr[idx], arr[j]];
            j--;
        }
    }
    return arr;
}

//  - efficient for small data sets
//  - constant memory / space O(1)

// Time Complexity
//   - Best: n when array is already sorted
//   - Average: O(n^2)
//   - Worst: O(n^2) when the array is reverse sorted

// this sort splits the array into two portions (conceptually, not literally)

// the left portion will become sorted
// the right portion (that hasn't been iterated over yet) is unsorted

// can shift or swap target element until it reaches desired position
// shifting steps:
//   1. consider the first item as sorted
//   2. move to the next item
//   3. store current item in a temp var (to make this position availale to shift items)
//   4. if item to the left of current is greater than current item,
//      shift the left item to the right
//   5. repeat step 4 as many times as needed
//   6. insert current item
//   7. move to the next item and repeat

// swap steps:
//   1. consider the first item as sorted
//   2. move to the next item
//   4. if item to left of current item is less than current, swap
//   5. repeat step 4 until item to left is less than current item
//   6. move to next item and repeat

// bonus challenge: use destructuring for your swap

// ************************************** jan 6 2021 *************************************************




















