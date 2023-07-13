const API_KEYS = "86db860c21778c9d44f2c62152535afb";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(`you live in ${lat}, ${lng}`);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lat}&appid=${API_KEYS}&units=metric`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
    }); //브라우저를 통해 url 호출
}
function onGeoError(){
    alert("Can't find you.No weather for you.");    
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);