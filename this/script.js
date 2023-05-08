// "use strict";

// console.log(this);
// var x = 10;
// function greet() {
//   console.log("Hello all");
//   console.log("NORMAL FUNCTION", this.x);
// }

// const greet2 = () => {
//   console.log("Hello all");
//   console.log("ARROW FUNCTION", this);
// };

// (() => {
//   console.log("IIFE", this);
// })();

// greet();
// greet2();

// window.newThis = window;
// console.log(newThis.closed);
// console.log(newThis.closed);
// // THIS KEYWORD
// var x = 10;
// let y = 20;

// // CALLINGA FUNCTION TO GET VALUES PRINTED
// greet();

// console.log(y); // 20
// function greet() {
//   console.log(newThis.x);
// }
// // CONSOLE LOG THIS
// console.log(newThis);

// CONSOLE LOG THIS INSIDE A FUNCTION

// THIS INSIDE A OBJECT
var fname = null;
const data = {
  fname: "guru",
  lname: "prasad",
  // OUTER FUNCTION
  getFullName: () => {
    console.log("OUTER", this);
    var fname = "hari";
    // INNER FUNCTION
    return function () {
      console.log("INNER", fname);
    };
  },
};

const innFn = data.getFullName();
innFn();
// function say() {
//   onsole.log("Say something");
// }

// say();

var x = 120;
function x() {
  console.log(x);
}
