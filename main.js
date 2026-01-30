import { renderCountries } from "./topics/countries.js";

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
    gameArea.innerHTML = "<h2>Weather game coming soon 🌤️</h2>";
  }
}

render();
