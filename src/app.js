function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  temperatureElement.innerHTML = Math.round (response.data.main.temp);
  cityElement.innerHTML = response.data.name;
}

let apiKey = "71ebeeaed9cc1b5740f1ef2da025fc0a";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);