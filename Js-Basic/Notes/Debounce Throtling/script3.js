// create Debounce()

const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");


var pressedCount = 0;
var triggerCount = 0;

const myDebounce = (cb, delayTime) => {
let timer;

return function (...args) {
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
        cb(...args)
    },delayTime)
}

}

const debounceCount = myDebounce((count) => {
    triggerCount +=1;
    count.innerHTML = triggerCount;
},800)


btn.addEventListener('click', () => {
    btnPress.innerHTML = ++pressedCount;
    debounceCount(count)
})