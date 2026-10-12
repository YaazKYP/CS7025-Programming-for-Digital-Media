const temperatureElement = document.getElementById("temperature");
const conditionElement = document.getElementById("condition");
const humidityElement = document.getElementById("humidity");
const windSpeedElement = document.getElementById("wind-speed");

const temperatureElement2 = document.getElementById("temperature2");
const conditionElement2 = document.getElementById("condition2");
const humidityElement2 = document.getElementById("humidity2");
const windSpeedElement2 = document.getElementById("wind-speed2");

const url =
  "https://api.open-meteo.com/v1/forecast?latitude=13.754&longitude=100.5014&hourly=precipitation_probability,temperature_2m&current=relative_humidity_2m,wind_speed_10m&forecast_days=1&wind_speed_unit=mph";
const url2 =
  "https://api.open-meteo.com/v1/forecast?latitude=53.3331&longitude=-6.2489&hourly=precipitation_probability,temperature_2m&current=relative_humidity_2m,wind_speed_10m&forecast_days=1&wind_speed_unit=mph";
  const refresh = () => {

  fetch(url)
    .then((response) => response.json())

    .then((data) => {
      const temperature = data.hourly.temperature_2m[0];
      const precipitationProbability = data.hourly.precipitation_probability[0];
      console.log(data);
      const windSpeed = data.current.wind_speed_10m;

      temperatureElement.textContent = `${temperature}°C`;
      temperatureElement.classList.remove("hot", "warm" , "cold");
      if (temperature < 25) {
        temperatureElement.classList.add("cold");
      } else if (temperature < 32) {
        temperatureElement.classList.add("warm");
      } else {
        temperatureElement.classList.add("hot");
      }

      let condition;
      conditionElement.classList.remove("rainy", "cloudy", "clear");
      if (precipitationProbability > 50) {
        condition = "Rainy";
        conditionElement.classList.add("rainy");
      } else if (precipitationProbability > 20) {
        condition = "Cloudy";
        conditionElement.classList.add("cloudy");
      } else {
        condition = "Clear";
        conditionElement.classList.add("clear");
      }

      conditionElement.textContent = condition;
      humidityElement.textContent = `${data.current.relative_humidity_2m}%`;
      windSpeedElement.textContent = `${windSpeed} mph`;
    });
};


const refresh2 = () => {
  fetch(url2)
    .then((response) => response.json())

    .then((data) => {
      const temperature = data.hourly.temperature_2m[0];
      const precipitationProbability = data.hourly.precipitation_probability[0];
      console.log(data);
      const windSpeed = data.current.wind_speed_10m;

      temperatureElement2.textContent = `${temperature}°C`;
      temperatureElement2.classList.remove("hot", "warm" , "cold");
      if (temperature < 25) {
        temperatureElement2.classList.add("cold");
      } else if (temperature < 32) {
        temperatureElement2.classList.add("warm");
      } else {
        temperatureElement2.classList.add("hot");
      }

      let condition;
      conditionElement2.classList.remove("rainy", "cloudy", "clear");
      if (precipitationProbability > 50) {
        condition = "Rainy";
        conditionElement2.classList.add("rainy");
      } else if (precipitationProbability > 20) {
        condition = "Cloudy";
        conditionElement2.classList.add("cloudy");
      } else {
        condition = "Clear";
        conditionElement2.classList.add("clear");
      }

      conditionElement2.textContent = condition; 
      humidityElement2.textContent = `${data.current.relative_humidity_2m}%`;
      windSpeedElement2.textContent = `${windSpeed} mph`;
    });
};

setInterval(refresh, 60000); // Refresh every 60 seconds
refresh(); // Initial refresh
setInterval(refresh2, 60000); // Refresh every 60 seconds
refresh2(); // Initial refresh
