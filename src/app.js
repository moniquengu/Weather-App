let apiKey = "fdc8a450df947256bc83a4a53890637a";
let apiCity = `https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=fdc8a450df947256bc83a4a53890637a&units=metric`;

function displayWeatherStats(response) {
  console.log(response.data);
}

axios.get(apiCity).then(displayWeatherStats);
