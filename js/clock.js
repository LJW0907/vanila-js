const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000) //setInterval() : 어떤 기능이 특정 시간마다 시행되도록 하는 함수

//setTimeout(sayHello, 5000); //setTimeout() : n초 기다렸다가 특정 기능을 한 번만 시행한다.