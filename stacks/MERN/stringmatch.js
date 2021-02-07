// STRING MATCHING IN AN ARRAY

// Given an array of string words. Return all strings in words which is substring of another word in any order.

// String words[i] is substring of words[j], if can be obtained removing some characters to left and/or right side of words[j].

// Examples:

words1 = ["mass","as","hero","superhero"]
// Output: ["as","hero"]
// Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
// ["hero","as"] is also a valid answer.


// Example 2:

words2 = ["leetcode","et","code"]
// Output: ["et","code"]
// Explanation: "et", "code" are substring of "leetcode".


// Example 3:

words3 = ["blue","green","bu"]
// Output: []


// Constraints:
// 1 <= words.length <= 100
// 1 <= words[i].length <= 30
// words[i] contains only lowercase English letters.
// It's guaranteed that words[i] will be unique.

// function stringMatch(words) {
//     let result = new Set();
//     for (let i = 0; i < words.length; i++) {
//         console.log("######>i ",words[i])
//         for (let j = 0; j < words.length; j++) {
//             console.log("======>j ",words[j])
//             console.log(j,result)
//             if (i != j) {
//                 if (words[i].includes(words[j])) {
//                     result.add(words[j]);
//                 }
//             }
//         }
//     }
//     return [...result];
// }

// console.log(stringMatch(words1));
// // console.log(stringMatch(words2));
// // console.log(stringMatch(words3));
// // console.log(stringMatch(["grass", "mass", "as"]));


function stringMatch(words) {
    let result = new Set();
    let i = 0;
    let j = 0;
    while (i < words.length) {
        if (words[i].includes(words[j])) {
            result.add(words[j]);
            j++;
        } else {
            j++;
            if (j >= words.length) {
                i++;
            }
        }
    }
    return [...result];
}

console.log(stringMatch(words1));
console.log(stringMatch(words2));
console.log(stringMatch(words3));
console.log(stringMatch(["grass", "mass", "as"]));
