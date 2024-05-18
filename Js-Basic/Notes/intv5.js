// This keyword

/************************************************************* */
// Q1: What is the output ?

// const user = {
//     firstName: "Amit",
//     getName() {
//         const firstName = "Amit Rawat";
//         return this.firstName
//     }
// }


// console.log(user.getName()); // Amit || since it is targetin the user obj
/************************************************************* */
// Q2: What is the result of accessing its ref ? why ?


// function makeUser() {
//     return {
//         name: "Alex",
//         ref: this,
//     };
// }
// let user = makeUser();

// console.log(user.ref.name);// It will print Empty since it is targeting the Window obj

// || in order to fix this and print the name we will do this:-
// function makeUser() {
//     return {
//         name: "Alex",
//         ref() {
//             return this // now this will be targeting parent obj
//         }
//     };
// }
// let user = makeUser();

// console.log(user.ref().name)


/************************************************************* */
// Q3: What is the output ?

// const user = {
//     name: "Amit Rawat",
//     logMessage() {
//         console.log(this.name); // what will be logged ?
//     }
// }

// setTimeout(user.logMessage, 1000)  // this will print undefined since it is targeting the 
// window object and it does not contain name as we are using "user.logMessage" as callbck in it

// in order to fix this and prit the name:-

// setTimeout(function () {
//     user.logMessage();
// }, 1000) // will print the name since now it will be targeting the user 

/************************************************************* */
// Q4: What is the output ?

const user = {
    name: "Amit",
    greet() {
        return `Hello ${this.name}`
    },
    farewell: () => {
        return `Goodbye, ${this.name} !`
    },
}


console.log(user.greet()); // Amit
console.log(user.farewell()); // Undefined || since we do not have any parent obj so it will be targeting the window obj a

/************************************************************* */
// Q5:  What is the output ?

var length = 4;

function callback() {
    console.log(this.length);// what is logged ?
}

const object = {
    length: 5, 
    method(fn) {
        fn();
    }
}

object.method(callback)

/************************************************************* */
// Q6: What is the output ?


/************************************************************* */
// Q7: What is the output ?