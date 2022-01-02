let apiKey = "fdc8a450df947256bc83a4a53890637a";
//show weather icon and description #6
function showIcon(icon) {
  console.log(icon);
  let iconElement = document.querySelector("#weatherIcon");
  let weatherDescription = document.querySelector("#mainWeatherDescription");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${icon.data.weather[0].icon}@2x.png`
  );
  weatherDescription.innerHTML = icon.data.weather[0].main;
}
//show Wind #5
function showWind(wind) {
  let newWind = Math.round(wind.data.wind.speed);
  let currentWind = document.querySelector("#city-wind");
  currentWind.innerHTML = `${newWind}`;
}

//show Humidity #4
function showHumidity(humidity) {
  let newHumidity = humidity.data.main.humidity;
  let currentHumidity = document.querySelector("#city-humidity");
  currentHumidity.innerHTML = `${newHumidity}`;
}

//show Temperature #2
function showTemperature(temperature) {
  console.log(temperature);
  let newTemperature = Math.round(temperature.data.main.temp);
  let currentTemperature = document.querySelector("#mainTemp-number");
  currentTemperature.innerHTML = `${newTemperature}`;
  celciusTemp = temperature.data.main.temp;
}

//show forecast days
function showForecastDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return days[day];
}

//show Forecast
function showForecast(response) {
  let dailyForecast = response.data.daily;
  console.log(dailyForecast);
  let forecastElement = document.querySelector("#forecastDay");

  let forecastHTML = `<div class="row"><div class="space3 col-sm-1"></div>`;

  let days = ["TUE", "WED", "THU", "FRI", "SAT"];
  dailyForecast.forEach(function (forecastDay, index) {
    if (index < 5) {
      forecastHTML =
        forecastHTML +
        `
  <div class="col-sm-2">
            <div class="card" style="max-width:200px">
              <div class="card-body" style="max-width:200px">
                <div class="weekDay">${showForecastDay(forecastDay.dt)}</div>
                <div class="smallIcon">
                  <img src="http://openweathermap.org/img/wn/${
                    forecastDay.weather[0].icon
                  }@2x.png" alt="">
                  </div>
                <div class="subTemperature">${Math.round(
                  forecastDay.temp.max
                )}° | ${Math.round(forecastDay.temp.min)}°</div>
                <div class="subWeatherStatus">${
                  forecastDay.weather[0].main
                }</div>
              </div>
            </div>
          </div>`;
    }
  });
  forecastHTML = forecastHTML + `<div class="space3 col-sm-1"></div></div>`;
  forecastElement.innerHTML = forecastHTML;
}

//find forecast Co-ords
function getForecast(coordinates) {
  let coordinateCity = coordinates.data.coord;
  let apiCoord = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinateCity.lat}&lon=${coordinateCity.lon}&appid=fdc8a450df947256bc83a4a53890637a&units=metric`;
  console.log(apiCoord);
  axios.get(apiCoord).then(showForecast);
}

//show city #1
function showCity(response) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-search");
  let currentCity = cityInput.value;
  let newCity = document.querySelector("#city-location");
  newCity.innerHTML = `${currentCity}`;
  let apiCity = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=fdc8a450df947256bc83a4a53890637a&units=metric`;
  axios.get(apiCity).then(showTemperature);
  axios.get(apiCity).then(showHumidity);
  axios.get(apiCity).then(showWind);
  axios.get(apiCity).then(showIcon);
  axios.get(apiCity).then(getForecast);
}
let cityInput = document.querySelector("#city-search-bar");
cityInput.addEventListener("submit", showCity);

//show Day and Time #3
function showDay() {
  let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let currentDay = days[time.getDay()];
  let newDay = `${currentDay}`;
  let dayText = document.querySelector("#current-day");
  dayText.innerHTML = newDay;
}
//function showTime() {
//let hours = time.getHours();
//let minutes = time.getMinutes();
//let currentTime = document.querySelector("#current-time");
//if (minutes < 10) {
//minutes = "0" + minutes;
// } else {
//}
//currentTime.innerHTML = `${hours}:${minutes}`;
//}

let time = new Date();
showDay();
//showTime();

//Show Month and Date
console.log(time);
function showMonth() {
  let months = [
    "December",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "September",
    "October",
    "November",
  ];
  let month = months[time.getMonth()];
  let currentMonth = document.querySelector("#currentMonth");
  currentMonth.innerHTML = `${month} `;
}
function showDate() {
  let date = time.getDate();
  let currentDate = document.querySelector("#monthDate");
  currentDate.innerHTML = `${date}`;
}

showMonth();
showDate();

//Show Geolocation #7
function showGeolocation(coordinate) {
  console.log(coordinate);
  let currentCity = coordinate.data.name;
  let newCity = document.querySelector("#city-location");
  newCity.innerHTML = `${currentCity}`;
  let newTemperature = Math.round(coordinate.data.main.temp);
  let currentTemperature = document.querySelector("#mainTemp-number");
  currentTemperature.innerHTML = `${newTemperature}`;
  let newHumidity = coordinate.data.main.humidity;
  let currentHumidity = document.querySelector("#city-humidity");
  currentHumidity.innerHTML = `${newHumidity}`;
  let newWind = Math.round(coordinate.data.wind.speed);
  let currentWind = document.querySelector("#city-wind");
  currentWind.innerHTML = `${newWind}`;
  let iconElement = document.querySelector("#weatherIcon");
  let weatherDescription = document.querySelector("#mainWeatherDescription");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${coordinate.data.weather[0].icon}@2x.png`
  );
  weatherDescription.innerHTML = coordinate.data.weather[0].main;
  celciusTemp = coordinate.data.main.temp;
}

function showCoordinate(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiCity = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=fdc8a450df947256bc83a4a53890637a&units=metric`;
  axios.get(apiCity).then(showGeolocation);
  axios.get(apiCity).then(getForecast);
}

function toggleGPS() {
  navigator.geolocation.getCurrentPosition(showCoordinate);
}
let buttonGPS = document.querySelector("#buttonGPS");
buttonGPS.addEventListener("click", toggleGPS);
toggleGPS();

//Toggle Celcius and farenheit #8
function showFarenheit() {
  event.preventDefault();
  let farenheitTemp = (celciusTemp * 9) / 5 + 32;
  let currentTemperature = document.querySelector("#mainTemp-number");
  currentTemperature.innerHTML = Math.round(farenheitTemp);
  celciusButton.classList.remove("active");
  farenheitButton.classList.add("active");
}

function showCelcius() {
  event.preventDefault();
  let currentTemperature = document.querySelector("#mainTemp-number");
  currentTemperature.innerHTML = Math.round(celciusTemp);
  celciusButton.classList.add("active");
  farenheitButton.classList.remove("active");
}

let celciusTemp = null;

let farenheitButton = document.querySelector("#mainTemp-Farenheit");
farenheitButton.addEventListener("click", showFarenheit);

let celciusButton = document.querySelector("#mainTemp-Celcius");
celciusButton.addEventListener("click", showCelcius);
