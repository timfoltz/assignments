// 1
console.log(hello);                                   
var hello = 'world';
// Hoisted
var hello;
console.log(hello);
hello = 'world';
// Will run with undefined.

// 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//Hoisted
var needle = 'haystack';
function test(){
    var needle = 'magnet';
    console.log(needle);
}
test();
// Will run with "magnet" and undefined


// 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// it is already hoisted an will run 'only okay' twice
// it will run with super cool, because brendan inside the function was not decalred by using var or let

// 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// Hoisted
var food = 'chicken';
console.log(food);
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
eat();

// will log with 'chicken', then half-chicken?


// 5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// Hoisted
var mean;
console.log(food);
mean = function() {
    var food;
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
}
mean();
console.log(food);
// will log undefined(food not yet defined), log chicken, fish, then undefined?--- got a an error, mean is not a function


// 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// Hoisted
var genre;
console.log(genre);
genre = "disco";
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
rewind();
console.log(genre);
// log undefined, 'rock', 'r&b', 'disco'

// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// Hoisted
dojo = "san jose";
console.log(dojo);
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
learn();
console.log(dojo);
// log undefined, seattle, burbank  undefined-- san jose, seattle, burbank, san jose--- the var did not need to be defined with "var, let, or const"??


// 8 - Bonus ES6: const
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// Hoisted
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// log dojo { name: Chicago, students: 65, hiring: true}
// log dojo { name: Berkley, students: 0, hiring: "closed for now"} This would not happen because it i attempting to write over a const which is not a dict so it can't change the const.