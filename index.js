const daysEl = document.getElementById('days');
const minutsEl = document.getElementById('minuts');
const hoursEl= document.getElementById('hours');


const date = new Date().getTime();
const dest = new Date("sep 15, 2023 09:30:00");

const diff = dest - date;

const timerId = setInterval(function() {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minuts = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    if (minuts < 10) {
        minuts = '0' + minuts
    } else if (hours < 10) {
        hours = '0' + hours
    } 
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutsEl.innerHTML = minuts;
    console.log(minuts)
}, 1000);




