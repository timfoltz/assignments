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

// ************************************** jan 7 2021 *************************************************

let quickSort = (arr[], low, high) => {
    if(low < high){
        let idx = Partition(arr, low, high);
        quickSort(arr, low, idx - 1);
        quickSort(arr, idx + 1, high);
    }
    return 
}

let Partition = (arr, left, right) => {
    let pivot = Math.floor(arr.length / 2)
    left = 0
    right = arr.length - 1

    let temp = arr[pivot]
    arr[pivot] = arr[arr.length-1]
    arr[arr.length-1] = temp

    for(let i=0; i<pivot; i++){
        console.log(arr[i])
        for(let j=arr.length-2; j>pivot; j--){
            console.log(arr[j])
            if(arr[i] > arr[j]){
                let temp2 = arr[i]
                arr[i] = arr[j]
                arr[j] = temp2
            }
        }
    }
}


console.log(Partition([5, 3, 2, 7, 1, 4, 6]))

// ************************JAN 11 2021***************************

// function intersection(arr1, arr2) {
//   if (arr1.length < 1 ){
//     return;
//   }
//   if (arr2.length < 1 ){
//     return;
//   }
//   let newArr = [];
//   let test = 0;


// 	for (let i,j=0; i<arr1.length; i++) {
// 		test = arr1[i];
//     console.log("arr 1 ",test)
// 	}

// 	for (let j=0; j<arr2.length; j++) {
// 			if(arr2[j] == test){
//         console.log("yes")
// 				console.log("arr 2 ",arr2[j]);
//       }
// 	}
  

// 	return newArr; 
// }
// console.log(intersection([1,2,2,3,4,4,5], [2,3,4,4,5,6]))

/* destructively finds the intersection of 
 * two arrays in a simple fashion.  
 *
 * PARAMS
 *  a - first array, must already be sorted
 *  b - second array, must already be sorted
 *
 * NOTES
 *  State of input arrays is undefined when
 *  the function returns.  They should be 
 *  (prolly) be dumped.
 *
 *  Should have O(n) operations, where n is 
 *    n = MIN(a.length, b.length)
 */
// function intersection_destructive(a, b)
// {
//   var result = [];
//   while( a.length > 0 && b.length > 0 )
//   {  
//      if      (a[0] < b[0] ){ a.shift(); consle.log(r)}
//      else if (a[0] > b[0] ){ b.shift(); }
//      else /* they're equal */
//      {
//        result.push(a.shift());
//        b.shift();
//      }
//   }

//   return result;
// }

// console.log(intersection_destructive([1,2,2,3,4,4,5], [2,3,4,4,5,6]))



// Intersect Sorted Arrays

// Combine two already sorted multiset arrays into
// an array containing the sorted set intersection of the two.

// Only the shared values between the two arrays, deduped (without duplicates).

// input: [1,2,2,2,7], [2,2,6,6,7]
// output: [2,7]

// function intersection(arr1, arr2) {}

// arrays are always sorted
// arrays may be different length
// all values will be positive integers

{
    // inputs are always to be sorted
    // not the same length
    // negative numbers? no
    // output has to be sorted? yes
    // space constraints (return a new array)
    // no speed constraints ( ideal O(n) )
    // can the arrays be empty? yes
    // can the arrays have floats or doubles? no, always integers
    // fail case: empty array
    }
    
    
    function intersect_arrays(arr1, arr2) {
    // place holder arr for matching values
        var common = [];
        var i = 0;
        var j = 0;
      // while i is less than length of arr1 and arr 2
        while (i < arr1.length
               && j < arr2.length)
        {
          // compare values of 2 indexes in 2 arrays
            if (arr1[i] === arr2[j]) {
              // if its not in common then push
    
              if(arr1[i] != common[common.length-1] || arr2[j] != common[common.length-1]){ //check for index of arr in if
                common.push(arr1[i]);
              }
                //common[common.length]
                i++;
                j++;
            }
            // increase i 
            else if(arr1[i] < arr2[j]) {
                i++;
            }
            // increament j
            else {
                j++;
            }
        }
        // return the placeholder arr
        return common;
    }
    
    console.log(intersect_arrays([1,2,2,3,3,2,7,8,9], [2,2,3,6,6,7,9]))

// ************************JAN 13 2021***************************

//Sujung Choi, Tim Foltz, Daniel Havens, Enoch Strok// #1 Missing Value

// You are given an array with the length of n that contains in no order integers from 0 to n.
// The length of the array is n and the largest number is no bigger than n.

// Quickly determine and return the missing value.

// The short version: If I give you an array of 0-9 and it's missing a number, how do you find it?

//  index arr[0]+ arr[1]+arr[2]=sum
//  given [3, 0, 1]=sum
//  return 2

//sum =arr[i] + sum (4) difference: 1//real difference:2
//index_sum=i+ index_sum(3)


// given [5, 2, 7, 8, 4, 9, 3, 0, 1]
// return 6



// sum = n*(n+1)/2; - should be 6 - 4 = returns 2
// (n / 2)(first number + last number) = sum, where n is the number of integers.

function findMissingValue(arr) {
    givenSum =0;

for (var i = 0 ; i < arr.length;i++){
    givenSum +=arr[i];
    }
console.log(givenSum)
console.log(arr.length)
console.log(givenSum - ((arr.length * (arr.length)/2)))
  return ((arr.length * (arr.length+1)/2)) - givenSum
}


findMissingValue([5, 2, 8, 4, 9, 3, 0, 1,6])
// return 6





// #2 Min of Sorted-Rotated

// You are given an an array of integers with a length of up to 255 thousand.
// This array has first been sorted, then rotated by an unknown amount.

// Find and return the minimum value.

// Ninja Goal: Do this faster than 0(n) ie: find your answer without visiting every single element
// (think binary search)

// Given [17, 18, 3, 5, 6, 9, 10, 11, 12, 13]
// return 3

function minOfSorted(arr, low = 0, high = arr.length - 1) {
    for(let i =0; i<arr.length; i++){
        console.log("i",i)
        console.log("arr[i]",arr[i])
        console.log("arr[i+1]",arr[i+1])
      if(arr[i] > arr[i+1]){
        return arr[i+1]
      }
    }

  }

  minOfSorted([17, 18, 2, 3, 5, 6, 9, 10, 11, 12, 13])

// *********************************************JAN 14 21********************************************
// https://leetcode.com/problems/two-sum/

const twoSums = (nums, target) => {};

// Given an array of integers, return indices of the
// two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// the array is unsorted, no floats, and there may be duplicates

// [5, 5, 6]
// 10
// [0, 1]

// Given nums = [2, 11, 7, 15], target = 9,
// Because nums[0] + nums[2] = 2 + 7 = 9,
// return [0, 2].

//[2, 11, 7, 15]
//        0   1

// []
function twoSums(nums, target) {
    let idx1 = 0;
    let idx2 = 1;
    const output = []; // 0(n2)
    while (idx1 !== nums.length) {
        if (nums[idx1] + nums[idx2] === target) {
            output.push(idx1);
            output.push(idx2);
            return output;
        } else if (idx2 === nums.length) {
            idx1++;            // by only incrementing idx1 under select conditions, our
            idx2 = idx1 + 1;   // while loop is actually running quite a bit slower than
        } else {               // a single for loop.
            idx2++;
        }
    }
}



//0(n)
function twoSumBetter(nums, target) {
    const map = {};

    // {'6': 1, '2': 2, '4': 3}


    // {name: "Brendan"}
    // "name" -> hashingmethod -> 2345678545678965456
    // [2345678545678965455, 2345678545678965456, 2345678545678965457]
    //                        "Brendan"
    // O(1)

    for (let i = 0; i < nums.length; i++) {
        let missingNumber = target - nums[i];
        if (map.hasOwnProperty(missingNumber)) { //.includes 0(n)
            return [map[missingNumber], i];
        }
        map[missingNumber] = i;
    }
    return [];
}
// ******************************************JAN 15 2021**********************************








/* *1189. Maximum Number of Balloons
 * Given a string text, you want to use the characters of
 * text to form as many instances of the word "balloon" as possible.
 *
 * You can use each character in text at most once.
 * Return the maximum number of instances that can be formed.
 *
 * Example 1:
 * Input: text = "nlaebolko"
 * Output: 1
 *
 * Example 2:
 * Input: text = "loonbalxballpoon"
 * Output: 2
 *
 * Example 3:
 * Input: text = "leetcode"
 * Output: 0
 * @param {string} text
 * @return {number}
 */
// string[i] = "value" 
//dict[new_key] = new_value; (adding key-value pairs)
//dict.new_key = new_value; (if key is already in dict)

function maxBaloons(string){
    let letterDict = {};
    let output=0
    console.log(string)
    for(let i=0;i<string.length;i++){
      console.log(string[i])
      if(string[i] in letterDict){
        letterDict[i] +=1
      }
      else{
      letterDict[i] = 1;
      }
    }
    return letterDict
  }
  console.log(maxBaloons("nlaebolko"));


//   ************************************SOLUTION
/* *1189. Maximum Number of Balloons
 * Given a string text you want to use the characters of
 * text to form as many instances of the word "balloon" as possible.
 *
 * You can use each character in text at most once.
 * Return the maximum number of instances that can be formed.
 *
 * Example 1:
 * Input: text = "nlaebolko"
 * Output: 1
 *
 * Example 2:
 * Input: text = "loonbalxballpoon"
 * Output: 2
 *
 * Example 3:
 * Input: text = "leetcode"
 * Output: 0
 * @param {string} text
 * @return {number}
 */
// O(n)
const Balloons = (text, word = "balloon") => {
    if (text.length < word.length) { return 0; } // if the word we want is larger than text, give up
    let count = Infinity; // assume we have Infinity possible instances
    let wordDict = {}; // dicts for words and text
    let textDict = {};

    // build a dictionary out of the letters we want
    for (let letter of word) {

        if(wordDict.hasOwnProperty(letter)){
            wordDict[letter]++;
        }else{
            wordDict[letter] = 1;
        }
        // wordDict.hasOwnProperty(letter) ?
        //     wordDict[letter]++
        // :
        //     wordDict[letter] = 1;
    }

    // build a dictionary out of the letters we have
    for (let letter of text) {
        textDict.hasOwnProperty(letter) ? textDict[letter]++ : textDict[letter] = 1;
    }

    // log the dicts for posterity
    console.log('text', textDict);
    console.log('words', wordDict);


    // loop over the letters we want
    for (let key of Object.keys(wordDict)) {
        // "b"
        let newAmount = Math.floor(textDict[key] / wordDict[key]);
        // find out how many words we can make with just that letter
        if (count > newAmount) {
            count = newAmount; // lower count
        }
    }
    return count;
};


console.log(Balloons("loonbalxbaoaeuhfipyahnnnnnnpiyefhpa8ywh9dhaps9fgyllllll8aoysgyfabwhuygdo8cabsicbausoygdo8agsf8ygasyidgaousdg8yasgdpgahspydgauysgdauoysllpoon", "balloon"));

// ********************************************************JAN 19 2021 ******************************************
// Challenge #1: findObjectsFilter(searchFor, items)

// given a 'search for' object with primative values and a list of objects
// return a new list of objects containing the same key value pairs as the search for

// given searchFor and items
const searchFor = {
    firstName: "Bob",
    age: 31
};

// searchFor.hasOwnProperty("firstName") // true / false
// Object.keys(searchFor); // ["firstName", "age"]

const items = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 }
];

// return a new list of objects containing the same key pair values
const output = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 }
];

// Object.hasOwnProperty()
// Object.keys(instance)
// functional (.map .filter)

// ["age", "firstName"]
//   "age",  "firstName"

function findObjectsFilter(search, items) {
    // put all the keys for the search object into an array
    const searchKeys = Object.keys(search);

    // filter the items
    return items.filter(item => {
        // for each item in items
        // for every key in searchKeys
        for (const key of searchKeys) {
            // if the key doesn't exist
            if (!item.hasOwnProperty(key) || item[key] !== search[key]) {
                return false;
            }
        }
        // if the for loop returns no falses, return true
        return true;
    })
}


// Challenge #2: findByIdAndUpdate(id, updateObject, arr)

//  Given an id, an object that has keys with corresponding updated values, and an array of objects

//  Find the object by "id" key that matches the given id value and then update that object's
//  keys with the provided new values.

// Return the updated object, or null if no object was found


const students = [{
        id: 1,
        name: "student1",
        isLateToday: false,
        lateCount: 15,
        redBeltStatus: false
    },
    {
        id: 2,
        name: "student2",
        isLateToday: false,
        lateCount: 1,
        redBeltStatus: false
    },
    {
        id: 3,
        name: "student3",
        isLateToday: false,
        lateCount: 0,
        redBeltStatus: false
    }
];


// Input: 3, { redBeltStatus: true }, students
// Output: {
//   id: 3,
//   name: "student3",
//   isLateToday: false,
//   lateCount: 0,
//   redBeltStatus: true
// }

// Input: 1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, students
// Output: {
//   id: 1,
//   name: "student1",
//   isLateToday: true,
//   lateCount: 16,
//   redBeltStatus: false
// }

// Input: 5, {}, students
// Output: null

function findByIdAndUpdate(id, updatedVals, collection) {
    // separate the keys
    const keys = Object.keys(updatedVals);

    // loop over the collection and look at each document
    for (const item of collection) {
        // match ids
        if (item.id === id) {
            // loop through our keys
            for (const key of keys) {
                // only update keys that exist on the found object
                if (item.hasOwnProperty(key)) {
                    item[key] = updatedVals[key];
                }
            }
            return item;
        }
    }
    // above return didn't run so nothing was found
    return null;
}

// Object.hasOwnProperty
// Object.keys(instance)
// functional (.map, .filter)


// ********************************JAN 20 2021***********************************


/*
  Given an array of ailments (illnesses), and an array of medication objects that have a nested array of treatedSymptoms
  return the medication name(s) that treats the most given symptoms
*/

const medications = [{
    name: "Sulforaphane",
    treatableSymptoms: [
        "dementia",
        "alzheimer's",
        "inflammation",
        "neuropathy",
    ],
},
{
    name: "Longvida Curcumin",
    treatableSymptoms: [
        "pain",
        "inflammation",
        "depression",
        "arthritis",
        "anxiety",
    ],
},
{
    name: "Hericium erinaceus",
    treatableSymptoms: [
        "anxiety",
        "cognitive decline",
        "depression"],
},
{
    name: "Nicotinamide mononucleotide",
    treatableSymptoms: [
        "ageing",
        "low NAD",
        "obesity",
        "mitochondrial myopathy",
        "diabetes",
    ],
},
{
    name: "PainAssassinator",
    treatableSymptoms: [
        "pain",
        "inflammation",
        "cramps",
        "headache",
        "toothache",
        "back pain",
        "fever",
    ],
},
];

// meds.treatableSymptoms.includes(ailments)

// array.includes( element/object, startingPosition )

function webMD(ailments, meds) {
    let result = [];

    result = meds.filter(med => {
        for (var i = 0; i < ailments.length; i++){
            if (!med.treatableSymptoms.includes(ailments[i])){
                return false;
            }
        }
        return true;
    });
    return result.map(med => med.name);
}

console.log(webMD(["pain"], medications))

// console.log(webMD(["pain"], medications))
// console.log(webMD(["pain", "inflammation", "depression"], medications))
console.log(webMD(["existential dread"], medications))
// webMD(["pain", "inflammation", "depression"], medications)

/*
Input: ["pain"], medications
Output: ["PainAssassinator", "Longvida Curcumin"]
*/

/*
Input: ["pain", "inflammation", "depression"], medications
Output: ["Longvida Curcumin"]
*/

/*
Input: ["existential dread"], medications
Output: []
*/