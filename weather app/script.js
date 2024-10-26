// let api = `https://api.openweathermap.org/geo/1.0/direct?q=germany&appid=49d0b8f18605629e7a5d67d677f575ec`;
// let API = `https://api.openweathermap.org/data/2.5/weather?q=baghpat&appid=49d0b8f18605629e7a5d67d677f575ec&units=metric`;

const city = document.querySelector(".city");
const wind = document.querySelector(".wind");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const image = document.querySelector(".weather-icon");
const weatherBox = document.querySelector(".weather");
const error = document.querySelector(".error");

const rain = `images/rain.png`;
const clouds = `images/clouds.png`;
const clear = `images/clear.png`;
const mist = `images/mist.png`;
const drizzle = `images/drizzle.png`;
const snow = `images/snow.png`;

const apiKey = `49d0b8f18605629e7a5d67d677f575ec`;
const apiURL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const checkWeather = async (cityName) => {
    if(cityName=== ''){
        error.style.display = "block";
        error.innerHTML = `Please enter a city`;
        weatherBox.style.display = "none";
        return;
    }
  const response = await fetch(`${apiURL}${cityName}&appid=${apiKey}`);

  if (response.status === 404) {
    error.style.display = "block";
    error.innerHTML = `Invalid city name`;
    weatherBox.style.display = "none";
  } else {
    const data = await response.json();
    console.log(data);

    city.innerHTML = data.name;
    wind.innerHTML = data.wind.speed + ` km/h`;
    temp.innerHTML = Math.round(parseInt(data.main.temp)) + `°C`;
    humidity.innerHTML = data.main.humidity + `%`;
    if (data.weather[0].main === "Clear") {
      image.src = clear;
    } else if (data.weather[0].main === "Clouds") {
      image.src = clouds;
    } else if (data.weather[0].main === "Rain") {
      image.src = rain;
    } else if (data.weather[0].main === "Drizzle") {
      image.src = drizzle;
    } else if (data.weather[0].main === "Mist") {
      image.src = mist;
    } else if (data.weather[0].main === "Snow") {
      image.src = snow;
    }
    // weatherBox.classList.remove('weather-none');
    weatherBox.style.display = "block";
    error.style.display = "none";
  }
};

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
