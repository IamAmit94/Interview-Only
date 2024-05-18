// call Bind and Apply

// What is Call ?
// The call() method of Function instances calls this function with a given this value and arguments provided individually.

var obj = {name: 'Amit'};

function sayHello(age, profession) {
    return "Hello " + this.name + " is " + age +" and is a " + profession;
}

// console.log(sayHello.call(obj, 22))//  Hello Amit is 22
// console.log(sayHello(obj)) // Hello undefined is [object Object]


// What is Apply ?
// Apply is same as the call however it takes the arguments in the form of array.

// console.log(sayHello.apply(obj, [29, "team Lead"])) // Hello Amit is 29 and is a team Lead


// What is Bind ?
// instead of passing the value bind is used as function

// const bindFunc = sayHello.bind(obj);
// console.log(bindFunc(22, "software engineer")) // Hello Amit is 22 and is a software engineer

/*********************************************************************** */
// Question 1: What is the ouput ?
// const person = {nam: "amit"}

// function sayHi(age) {
//     return `${this.nam} is ${age}`
// }

// console.log(sayHi.call(person, 24)); // amit is 24
// console.log(sayHi.bind(person, 23)); // [Function: bound sayHi] || since bind need the function

/*********************************************************************** */
// Question 2: Call with function inside object

const age = 10;
var person = {
  name: "Piyush",
  age: 20,
  getAge: function () {
    return this.age;
  },
};
var person2 = { age: 24 };
console.log(person.getAge.call(person2)); // 24 || as this will point the person2
console.log(person.getAge.apply(person2));
console.log(person.getAge.bind(person2)());

/*********************************************************************** */
// Question 3: What is the ouput ?


// var status = "AAA";
// setTimeout(() => {
//   const status = "BBB";
//   const data = {
//     status: "CCC",
//     getStatus() {
//       return this.status;
//     },
//   };
//   console.log(data.getStatus());
//   console.log(data.getStatus.call(this));
// }, 0);


/*********************************************************************** */
// Question 4: — call ptintAnimals such that it prints all animals in object


const animals = [
  { species: "Lion", name: "King" },
  { species: "Whale", name: "Queen" },
];
function printAnimals(i) {
  this.print = function () {
    console.log("#" + i + " " + this.species + ": " + this.name);
  };
  this.print();
}

for (let i = 0; i < animals.length; i++) {
    console.log(printAnimals.call(animals[i], i));
}

/*********************************************************************** */
// Question 5: — Append the array to another array

const array = ["a", "b"];
const elements = [0,1,2];

array.push.apply(array, elements);
console.log(array)

/*********************************************************************** */
// Question 6: — Using apply to enhnace built-in functions

//Find min/max number in an array
const numbers = [5,6,2,3,7];

// instead of applying the loop
console.log(Math.max.apply(null, numbers))
console.log(Math.min.apply(null, numbers))

/*********************************************************************** */
// Question 7: — Bound Function

// function f() {
//     console.log(this); // this function will be pointing to the window obj
// }


// let user = {
//     g: f.bind(null),
// };


// user.g()

/*********************************************************************** */
// Question 8: —  Bind Chaining

function f() {
  console.log(this.name);
}
f = f.bind({ name: "John" }).bind({ name: "Ann" });
f(); // John || coz once the function is bind to 1 object it will not accept another and Binding does not exist!.
    
/*********************************************************************** */
// Question 9: —  Fix the line  to make the code work properly

// function checkPassword(success, failed) {
//     let password = prompt("passwprd" ,"");
//     if(password == "abc") success();
//     else failed();
// }


// let user = {
//     name: "Amit",

//     loginSuccessful() {
//         console.log(`${this.name} logged in`);
//     },
//     loginFailed() {
//         console.log(`${this.name} failed to log in`);
//     }
// }

// checkPassword(user.loginSuccessful.bind(user), user.loginFailed.bind(user))