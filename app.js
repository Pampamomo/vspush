//This is a single line comment while
/* 
this is a multi-line comment 
understanding the difference between single line and multi line comment in javascript*/

// a variable in javascript is a named container used to store data that can be used and changed later in the program.
//there are 3 ways to declare a variable in javascript
// 1. var
// 2. let
// 3. const

// 1. var, can be re-delared and re-assigned

var Firstname = "Pamela";
var Firstname = "omo"; // re-declared
firstname = "Ese"; // re-assigning
console.log(firstname);

// 2. let, can be a be re-assigned but nor re-declared
// let Firstname = "pamela";
Lastname = "omo"; // re-assigned

// 3. const cannot be re-assigned or re-declared
const FullName = "pampam omo";

function greeting() {
  console.log("This is my first Javascript");
}

greeting();

//The purpose of alert is to display a message to the user

//alert("This is my first Javascript alert")

//The purpose of prompt is to get user input

//let userinput = prompt("pleas enter yor name");

// this purpose is to ok or cancel
// let isSure = confirm("are you sure you want to proceed");

//the purpose of console.log is to log messages to the console
console.log("pam omo");

// DATA TYPES IN JAVASCRIPT
//Primitive Data Typed
// 1. string
// 2. Number
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol

// 1. Example of a string
// let Firstname = "pamela"; //single quote
// let Lastname = "omo"; //double quote

// 2. Example of a number

let age = 30; //integer

// 3. Example of a Boolean. in boolean we have either true or false
let isMarried = false; //true or false

// 4. Example of an Undefined, a variable declared without a value
let result;

console.log(result);

// 4. Example of a null(nothing)
let emptyvalue = null;
console.log(emptyvalue);

// 6. example of a symbol, use to differentiate an item
let Uniquefeild;

//Non Primitive Data Types
// 1. Array
// 2. Object
// 3. Function

// 1. exampe of Array
// An array is a special variable, which can hold more than one value at a time.

let fruits = ["apple", "banana", "orange", "grape"];

console.log(fruits[0], fruits[3]);

// an array that holds different data types
let mixed = [
  50,
  "Daniel",
  false,
  null,
  undefined,
  { name: "pamela" },
  [("apple", "banana")],
];

console.log(mixed);

// Example of object
// An object is a collection of properties, where each property has a key and a value.
let person = {
  firstname: "Pamela",
  lastname: "Omo",
  age: "100",
  iaStudent: false,
  address: {
    // nested object
    city: "Abuja",
    Country: "Nigeria",
    Placetovisit: ["kaduna", "Lagos", "portharcourt"],
    dreamcars: { car1: "Gwagon", car2: "ferrari", car3: "bugatti" },
  },
};

// Using dot notation to access object propertis
console.log(person.address.Placetovisit[2]);

// using bracket notation
console.log(person["firstname"]);

// Example of function
function greet(name) {
  console.log("Hello " + name);
}

//calling the function
// invoking the function
// executing the function
greet("Pamela Ayinla");

// Arithmetic Opertors
let g = 25;
let f = 5;
let sum = g + f; //30

// 2. subtraction
let d = 25;
let e = 5;
let sub = d - e;

console.log(sub);

// multiplication

let mul = d * e;

console.log(mul);

// division

let div = d / e;
console.log(div);

// concatenation
let myfirstname = "pamela";
let mylastname = "ayinla";
let myfulname = myfirstname + " " + mylastname; //output pamela ayinla
