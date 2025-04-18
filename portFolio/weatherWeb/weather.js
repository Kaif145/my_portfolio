const APIKEY = "a78b06eef5331e179967bf976b68d648";
const APIURL = "https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}";

const wind = document.querySelector(".windIn");
const temp = document.querySelector(".tempIn");
const cityInput = document.querySelector("input");

const searchButton = document.querySelector("i");
const img = document.querySelector("img");





const showWeather = (data) => {
  wind.innerHTML = data.wind.speed + " m/s";
  temp.innerHTML = data.main.temp + "°C";
  console.log(data.main.temp);
  console.log(data.wind.speed);

  const weatherCondition = data.weather[0].main.toLowerCase(); 

  // Select image based on weather condition
  if (weatherCondition.includes("clear")) {
    img.src = "./assest/clear.png";
  } else if (weatherCondition.includes("clouds")) {
    img.src = "./assest/cloud.png";
  } else if (weatherCondition.includes("rain")) {
    img.src = "./assest/rain.png";
  } else if (weatherCondition.includes("snow")) {
    img.src = "./assest/snow.png";
  } else {
    img.src = "./assest/default.jpn"; // Default fallback image
  }

  // Debugging logs
  console.log("Updated Image Source:", img.src);

  // Check if image loads
  img.onload = () => console.log("Image loaded successfully!");
  img.onerror = () => console.error("Image failed to load:", img.src);

}

const getWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if (data.cod === "404") {
      alert("City not found");
      return;
    }
    showWeather(data);
    console.log(data.main.temp);
};

  // getWeather(city);




searchButton.addEventListener("click", () => {
  const city = cityInput.value;
  console.log(city);
  getWeather(city);
});




