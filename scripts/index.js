const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minute");
const secondElement = document.getElementById("second");
const ampmElement = document.getElementsByClassName("ampm");

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";
    if(h > 12) {
        h = h-12;
        ampm = "PM";
    }

    hourElement.innerText = h;
    minuteElement.innerText = m;
    secondElement.innerText = s;

    ampmElement.innerText = ampm;
    setTimeout ( () => {
        updateClock();
    }, 1000);
    
}

updateClock();