let apiKey = "fdc8a450df947256bc83a4a53890637a";

//show Temperature #2
function showTemperature(temperature) {
  console.log(temperature);
  let newTemperature = Math.round(temperature.data.main.temp);
  let currentTemperature = document.querySelector("#mainTemp-number");
  currentTemperature.innerHTML = `${newTemperature}`;
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
function showTime() {
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let currentTime = document.querySelector("#current-time");
  if (minutes < 10) {
    minutes = "0" + minutes;
  } else {
  }
  currentTime.innerHTML = `${hours}:${minutes}`;
}

let time = new Date();
showDay();
showTime();
