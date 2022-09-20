function newSummerCountdown (){
    const newSummerDate = new Date("June 01, 2023 00:00");
    const now = new Date();
    const diff = newSummerDate - now;

    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

    const displayDay = Math.floor(diff/msInDay);
    document.querySelector(".days").textContent = displayDay;

    const displayHour = Math.floor((diff%msInDay)/msInHour);
    document.querySelector(".hour").textContent = displayHour;

    const displayMinute = Math.floor((diff%msInHour)/msInMinute);
    document.querySelector(".minutes").textContent = displayMinute;

    const displaySecond = Math.floor((diff%msInMinute)/msInSecond);
    document.querySelector(".second").textContent = displaySecond;

    if (diff <= 0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hour").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".second").textContent = 0;
        clearInterval(timerId);
        happySummer();
    
    }
}

let timerId = setInterval(newSummerCountdown,1000);

function happySummer (){
    const heading = document.querySelector("h1");
    heading.textContent = "УРАА!ЛЕТО";
    heading.classList.add(".red");
}


const btn = document.querySelector("#btn");
const audio = document.querySelector("#myAudio");

btn.addEventListener ("click", function (){
    if (audio.paused){
        audio.play();
    }
    else {
        audio.pause();
    }
})
