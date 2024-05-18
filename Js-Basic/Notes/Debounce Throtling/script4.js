// create your throttle


const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");


var pressedCount = 0;
var triggerCount = 0;

const start = new Date().getTime();
const myThrottle = (cb, delayTime) => {
    let last = 0;

    return (...args) => {
        let now = new Date().getTime();
        if(now - last < delayTime) return;
        last = now;
        return cb(...args)
    }
}

const throttleCount = myThrottle(() => {
   triggerCount += 1;
    count.innerHTML = ++triggerCount;
},1000)

btn.addEventListener('click', () => {
    btnPress.innerHTML = ++pressedCount;
    throttleCount()
})