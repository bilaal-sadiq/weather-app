// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// 2c8ad102bce943a1b27c4242fc736a98

// https://api.openweathermap.org/data/2.5/weather?q=london&appid=2c8ad102bce943a1b27c4242fc736a98&units=metric

const apiKey = "2c8ad102bce943a1b27c4242fc736a98";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");


async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data)

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " mph"

}

searchBtn.addEventListner("click", () => {
     checkWeather(searchBox.value);    
})



// async function checkWeather() {
//     const weather = await fetch("https://api.openweathermap.org/data/2.5/weather?q=london&appid=2c8ad102bce943a1b27c4242fc736a98&units=metric");
//     const weatherData = await weather.json();
//     console.log(weatherData)
    
// }

// checkWeather();