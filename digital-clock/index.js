const hourEl= document.getElementById("hour");
const minutesEl= document.getElementById("minutes");
const secondsEl= document.getElementById("seconds");
const ampmEl= document.getElementById("ampm");

function updateClock(){
    let hours= new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let ampm="AM";

    if(hours > 12)
    {
        hours = hours-12;
        ampm = "PM";
    }

    hourEl.innerText = hours;
    minutesEl.innerText = minutes;
    secondsEl.innerText = seconds;
    ampmEl.innerText = ampm;

}

updateClock();