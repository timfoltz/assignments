// For the following five blocks of code, predict the output. If a line of code will throw an error, state the error.

// Problem 1

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)
// log tesla
// log mercedes

// Problem 2

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);
// will have error because the name:otherName is changing the value of name to another varible that doenst exist



// Problem 3

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);
// hashed password has no definition. There would be an error---It would just log undefined for hashedPassword


// Problem 4

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);
// I did not understand this. I ran it and understand that the const[x] is declaring a new var using the info in the var numbers.


// Problem 5

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); 
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

// console.log(key); will log "value"
// console.log(secondKey); will log: [1, 5, 1, 8, 3, 3]
// console.log(secondKey[0]); will log: 1
// console.log(willThisWork); will log: 5