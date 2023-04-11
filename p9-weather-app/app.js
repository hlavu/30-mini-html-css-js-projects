const input = document.querySelector("#search");
const city = document.querySelector(".location");
const date = document.querySelector(".time");
const tempt = document.querySelector(".temperature");
const state = document.querySelector(".state");
const visibility = document.querySelector(".visibility span");
const wind = document.querySelector(".wind span");
const cloud = document.querySelector(".cloud span");
const body = document.querySelector("body");
const container = document.querySelector(".container");
const feeling = document.querySelector(".feel-like");
const weather = document.querySelector(".weather");
const greeting = document.querySelector(".greeting");

async function callAPI() {
  let city = input.value.trim();

  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c22541c8c24aef3809ab3e168f7b1d7e`;

  const data = await fetch(apiURL).then((res) => res.json());
  if (data && data.cod === 200) {
    renderUI(data);
  } else {
    greeting.innerHTML = "City is not found!";
  }
}

const renderUI = (data) => {
  weather.classList.toggle("hide", false);
  greeting.classList.toggle("hide", true);
  date.innerHTML = new Date().toLocaleString();
  city.innerHTML = data.name + ", " + data.sys.country;
  visibility.innerHTML = data.visibility + " (m)";
  wind.innerHTML = data.wind.speed + " (m/s)";
  cloud.innerHTML = data.clouds.all + " (%)";
  tempt.innerHTML = Math.round(data.main.temp - 273.15) + `<sup>o</sup>C`;
  state.innerHTML = data.weather[0].main;
  feeling.innerHTML =
    "Feel like: " + Math.round(data.main.feels_like - 273.15) + `<sup>o</sup>C`;
};

input.addEventListener("keypress", (e) => {
  if (e.which === 13) {
    callAPI();
    input.value = "";
  }
});
