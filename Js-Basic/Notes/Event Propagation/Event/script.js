const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

// // Mentions are the bubble event
// div.addEventListener("click",function () {
//     alert("div")
// })
// form.addEventListener("click",function () {
//     alert("FORM")
// })
// button.addEventListener("click",function () {
//     alert("BUTTON")
// })



//Q3: event.target vs this.target vs event.currentTarget

// div.addEventListener("click", func);
// form.addEventListener("click", func);
// button.addEventListener("click", func);

// function func(event) {
//   alert(
//     "currentTarget = " +
//       event.currentTarget.tagName +
//       ", target = " +
//       event.target.tagName +
//       ", this = " +
//       this.tagName
//   );
// }

//Q4: what is Event Capturing / Trickling ?
// Top to Bottom approch

// div.addEventListener(
//   "click",
//   function () {
//     alert("div");
//   },
//   {
//     capture: true,
//   }
// );
// form.addEventListener(
//   "click",
//   function () {
//     alert("FORM");
//   },
//   {
//     capture: true,
//   }
// );
// button.addEventListener(
//   "click",
//   function () {
//     alert("BUTTON");
//   },
//   {
//     capture: true,
//   }
// );

// Q5: How to stop the bubbling and Capturing ?
// in order to stop the capturing
// div.addEventListener("click",function (e) {
//     e.stopPropagation();
//     alert("div")
// })
// form.addEventListener("click",function (e) {
//     e.stopPropagation();
//     alert("FORM")
// })
// button.addEventListener("click",function (e) {
//     e.stopPropagation();
//     alert("BUTTON")
// })

// in case you want to stop the capturing of particular event use stopPropagation()

// Q6: Change the output of the mentioned below ?
// in order Form --> button ---> div
div.addEventListener("click",function (e) {
    alert("div")
})
form.addEventListener("click",function (e) {
    alert("FORM")
}, {
    capture: true
})
button.addEventListener("click",function (e) {
    alert("BUTTON")
})

// with the help of capture the form will execute first and then button and div according to bubbling



