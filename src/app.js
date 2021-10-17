let apiKey = "fdc8a450df947256bc83a4a53890637a";

//show city #1
function showCity(response) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-search");
  let currentCity = cityInput.value;
  let newCity = document.querySelector("#city-location");
  newCity.innerHTML = `${currentCity}`;
  let apiCity = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=fdc8a450df947256bc83a4a53890637a&units=metric`;
}
let cityInput = document.querySelector("#city-search-bar");
cityInput.addEventListener("submit", showCity);
