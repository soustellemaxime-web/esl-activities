import { renderCountries } from "./topics/countries.js";
import { renderWeather } from "./topics/weather.js";
import { renderServices } from "./topics/services.js";

const gameArea = document.getElementById("gameArea");

const topicButtons = document.querySelectorAll(".topicBtn");

let currentTopic = "countries";

topicButtons.forEach(btn => {
  btn.onclick = () => {
    topicButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    currentTopic = btn.dataset.topic;
    render();
  };
});

function render() {
  gameArea.innerHTML = "";

  if (currentTopic === "countries") {
    document.getElementById("controls").style.display = "block";
    renderCountries(gameArea);
  }

  if (currentTopic === "weather") {
    document.getElementById("controls").style.display = "none";
    renderWeather(gameArea);
  }

  if (currentTopic === "services") {
    document.getElementById("controls").style.display = "none";
    renderServices(gameArea);
  }
}

render();
