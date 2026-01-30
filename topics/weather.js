import { weatherData, clothesData } from "../data/weatherData.js";

function render(gameArea) {

    const clothesContainer = document.createElement("div");
    clothesContainer.className = "clothes-container";
    clothesData.forEach(item => {
        const clotheEl = document.createElement("div");
        clotheEl.className = "clothes-item";
        clotheEl.draggable = true;
        const img = document.createElement("img");
        img.src = item.img;
        img.alt = item.name;
        img.draggable = false;

        clotheEl.appendChild(img);
        clotheEl.dataset.target = item.target;
        clotheEl.addEventListener("dragstart", (e) => {
            e.dataTransfer.effectAllowed = "move";
            e.dataTransfer.setData("text/plain", item.target);
        });
        clothesContainer.appendChild(clotheEl);
    });
    gameArea.appendChild(clothesContainer);

    const weatherContainer = document.createElement("div");
    weatherContainer.className = "weather-container";
    weatherData.forEach(weather => {
        const dropZone = document.createElement("div");
        dropZone.className = "drop-zone";
        const img = document.createElement("img");
        img.src = weather.img;
        img.alt = weather.name;
        img.draggable = false;

        const label = document.createElement("div");
        label.textContent = weather.name;

        dropZone.appendChild(img);
        dropZone.appendChild(label);
        dropZone.dataset.id = weather.id;
        dropZone.addEventListener("dragover", (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = "move";
        });
        dropZone.addEventListener("drop", (e) => {
            e.preventDefault();
            const target = e.dataTransfer.getData("text/plain");
            if (target === weather.id) {
                dropZone.style.backgroundColor = "lightgreen";
            }
        });
        weatherContainer.appendChild(dropZone);
    });
    gameArea.appendChild(weatherContainer);
}

export function renderWeather(gameArea) {
  render(gameArea);
}