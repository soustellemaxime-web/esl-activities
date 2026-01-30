import { countriesData } from "./data/countriesData.js";
import { weatherData } from "./data/weatherData.js";

let remainingCountries = [];
let foundCountries = [];
let mode = "ball";
let currentQuestion = null;
let questionAnswered = false;

const grid = document.getElementById("countriesGrid");
const questionText = document.getElementById("question");
const quizFlag = document.getElementById("quizFlag");
const nextBtn = document.getElementById("nextBtn");

function getRandomCountry() {
  return countriesData[Math.floor(Math.random() * countriesData.length)];
}

function render() {
  grid.innerHTML = "";
  questionAnswered = false;

  if (mode === "quiz") {
    console.log(foundCountries);
    questionAnswered = false;

    if (remainingCountries.length === 0) {
      questionText.textContent = "🎉 All flags found!";
      quizFlag.style.display = "none";
      document.getElementById("nextBtn").style.display = "none";
      return;
    }

    currentQuestion =
      remainingCountries[
        Math.floor(Math.random() * remainingCountries.length)
      ];

    questionText.textContent = "Which country is this flag?";
    quizFlag.src = `https://flagcdn.com/w320/${currentQuestion.code}.png`;
    quizFlag.style.display = "block";
    document.getElementById("nextBtn").style.display = "none";
  }
  else {
    questionText.textContent = "";
    quizFlag.style.display = "none";
  }

  countriesData.forEach(country => {
    const card = document.createElement("div");
    card.className = "card";

    const nameDiv = document.createElement("div");
    nameDiv.className = "country";
    nameDiv.textContent = country.name;

    card.appendChild(nameDiv);


      const flagDiv = document.createElement("div");
      flagDiv.className = "flag";

      const placeholder = document.createElement("div");
      placeholder.className = "flag-placeholder";

      const img = document.createElement("img");
      img.src = `https://flagcdn.com/w320/${country.code}.png`;

      if (!foundCountries.includes(country.code)){
        img.style.display = "none";
        flagDiv.appendChild(placeholder);
      }

      flagDiv.appendChild(img);
      card.appendChild(flagDiv);

      card.addEventListener("click", () => {

        const isHidden = img.style.display === "none";
        placeholder.style.display = isHidden ? "none" : "block";
        img.style.display = isHidden ? "block" : "none";
      });


    if (mode === "quiz") {
      card.addEventListener("click", () => {
        if (questionAnswered) return;

        if (country.code === currentQuestion.code) {
          questionAnswered = true;
          foundCountries.push(country.code);
          questionText.textContent = "✅ Correct!";
          quizFlag.style.display = "none";

          // Remove from remaining questions
          remainingCountries = remainingCountries.filter(
            c => c.code !== country.code
          );

          document.getElementById("nextBtn").style.display = "inline-block";
        } else {
          questionText.textContent = "❌ Try again";
        }
      });
    }

    grid.appendChild(card);
  });
}

document.getElementById("ballMode").onclick = () => {
  mode = "ball";
  render();
};

document.getElementById("quizMode").onclick = () => {
  mode = "quiz";
  remainingCountries = [...countriesData]; // copy
  render();
};

nextBtn.onclick = () => {
  if (mode === "quiz") {
    render();
  }
};

render();
