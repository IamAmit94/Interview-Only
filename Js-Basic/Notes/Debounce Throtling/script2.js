// Debouncing and Throttling in Javascript
//  Ques 2 - Create a button UI and add Thothling as follows =>
//        --> Show "Button Pressed <x> Times" every time button is pressed
//        --> Increase "Triggered <Y> Times" count after 800ms of debounce


const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");


var pressedCount = 0;
var triggerCount = 0;

const start = new Date().getTime();

const throttleCount = _.throttle(() => {
    const now = new Date().getTime();
    console.log(now - start)
    count.innerHTML = ++triggerCount;
},800)

btn.addEventListener('click', () => {
    btnPress.innerHTML = ++pressedCount;
    throttleCount()
})