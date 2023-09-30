const searchInput = document.querySelector(".wrapper input");
const searchButton = document.querySelector(".wrapper button");
const weather = document.querySelector(".weather");
const API_KEY = "6b4c292e3e049dbf64d6c2441cc77864";

let searchValue = "";

searchInput.addEventListener("keyup", (e) => {
  searchValue = e.target.value;
});

searchButton.addEventListener("click", () => {
  weather.innerHTML = "";
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lang=ru&q=${searchValue}&appid=${API_KEY}&units=materic`
  )
    .then((data) => data.json())
    .then((data) => {
      console.log(data);

      const text = document.createElement("p");
      const text2 = document.createElement("p");
      const text3 = document.createElement("p");
      const text4 = document.createElement("p");

      text.textContent = `Температура: ${(data.main.temp - 273.15).toFixed(2)}`;
      text2.textContent = `Ошущается как: ${(
        data?.main?.feels_like - 273.15
      ).toFixed(2)}`;
      text3.textContent = `Минимальная темпаратура: ${(
        data?.main?.temp_min - 273.15
      ).toFixed(2)}`;
      text4.textContent = `Максимальная темпаратура: ${(
        data?.main?.temp_min - 273.15
      ).toFixed(2)}`;

      weather.append(text);
      weather.append(text2);
      weather.append(text3);
      weather.append(text4);
    });
});
