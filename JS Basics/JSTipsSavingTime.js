//Filter Unique Values

const array = [1, 1, 2, 3, 5, 5, 1]
const uniqueArray = [...new Set(array)];
console.log(uniqueArray); // Result: [1, 2, 3, 5]


//Short-Circuit Evaluation

x > 100 ? 'Above 100' : 'Below 100';
x > 100 ? (x > 200 ? 'Above 200' : 'Between 100 - 200') : 'Below 100';

//How It Works
// Using && will return the first false or ‘falsy’ value. 
// If every operand evaluates to true , 
// the last evaluated expression will be returned.
let one = 1, two = 2, three = 3;
console.log(one && two && three); // Result: 3
console.log(0 && null); // Result: 0

//Example 
// Let’s say we want to return the length of a variable, 
// but we don’t know the variable type.
// If the variable foo is truthy, 
// it will be returned. Otherwise, the length of the empty array will be returned: 0 .
return (foo || []).length;


//Example 2
// Have you ever had problems accessing a nested object property? 
// You might not know if the object or one of the sub-properties exists, 
// and this can cause frustrating errors.
//Long 
if (this.state.data) {
    return this.state.data;
  } else {
    return 'Fetching Data';
  }
//Short
return (this.state.data || 'Fetching Data');

//Convert to boolean

const isTrue  = !0;
const isFalse = !1;
const alsoFalse = !!0;
console.log(isTrue); // Result: true
console.log(typeof true); // Result: "boolean"

//Convert to string 

const val = 1 + "";
console.log(val); // Result: "1"
console.log(typeof val); // Result: "string"

//Convert to Number

let int = "15";
int = +int;
console.log(int); // Result: 15
console.log(typeof int); //Result: "number"

//Quick Pow-ers

console.log(2 ** 3); // Result: 8 Its like Math.pow();

//Quick Float to Integer bitwise OR operator

console.log(23.9 | 0);  // Result: 23
console.log(-23.9 | 0); // Result: -23

//Remove final digits

let str = "1553"; 
Number(str.substring(0, str.length - 1));

//bitwise OR operator

console.log(1553 / 10   | 0)  // Result: 155
console.log(1553 / 100  | 0)  // Result: 15
console.log(1553 / 1000 | 0)  // Result: 1

//Automatic Binding in Classes

import React, { Component } from React;
export default class App extends Compononent {
  constructor(props) {
  super(props);
  this.state = {};
  }
myMethod = () => {
    // This method is bound implicitly!
  }
render() {
    return (
      <>
        <div>
          {this.myMethod()}
        </div>
      </>
    )
  }
};


//Truncate an Array / remove last elements

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
array.length = 4;
console.log(array); // Result: [0, 1, 2, 3]

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
array = array.slice(0, 4);
console.log(array); // Result: [0, 1, 2, 3]

//Get the Last Item(s) in an Array

let array = [1,2,3,4,5,6,7,8,9];
console.log(array.slice(-1)); // Result: [9]
console.log(array.slice(-2)); // Result: [8, 9]
console.log(array.slice(-3)); // Result: [7, 8, 9]

//Format JSON Code '\t' - insert tabs

console.log(JSON.stringify({ alpha: 'A', beta: 'B' }, null, '\t'));
// Result:
// '{
//     "alpha": A,
//     "beta": B
// }'


//[Deprecated] Cache Array Length in Loops

for (let i = 0, len = array.length; i < len; i++);
//rather than 
for (let i = 0; i < array.length; i++);



