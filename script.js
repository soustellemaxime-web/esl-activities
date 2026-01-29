const countries = [
  { name: "France", code: "fr" },
  { name: "Thailand", code: "th" },
  { name: "Japan", code: "jp" },
  { name: "United Kingdom", code: "gb" },
  { name: "United States", code: "us" },
  { name: "China", code: "cn" },
  { name: "South Korea", code: "kr" },
  { name: "Spain", code: "es" },
  { name: "Italy", code: "it" },
  { name: "Germany", code: "de" },
  { name: "Vietnam", code: "vn" },
  { name: "Australia", code: "au" },
  { name: "Canada", code: "ca" },
  { name: "Brazil", code: "br" },
  { name: "India", code: "in" }
];

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
  return countries[Math.floor(Math.random() * countries.length)];
}

function render() {
  grid.innerHTML = "";
  questionAnswered = false;

  if (mode === "quiz") {
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

  countries.forEach(country => {
    const card = document.createElement("div");
    card.className = "card";

    const nameDiv = document.createElement("div");
    nameDiv.className = "country";
    nameDiv.textContent = country.name;

    card.appendChild(nameDiv);

    if (mode === "ball") {
      const flagDiv = document.createElement("div");
      flagDiv.className = "flag";

      const placeholder = document.createElement("div");
      placeholder.className = "flag-placeholder";

      const img = document.createElement("img");
      img.src = `https://flagcdn.com/w320/${country.code}.png`;
      img.style.display = "none";

      flagDiv.appendChild(placeholder);
      flagDiv.appendChild(img);
      card.appendChild(flagDiv);

      card.addEventListener("click", () => {
        const isHidden = img.style.display === "none";

        placeholder.style.display = isHidden ? "none" : "block";
        img.style.display = isHidden ? "block" : "none";
      });
    }

    if (mode === "quiz") {
      card.addEventListener("click", () => {
        if (questionAnswered) return;

        if (country.code === currentQuestion.code) {
          questionAnswered = true;

          questionText.textContent = "✅ Correct!";
          quizFlag.style.display = "none";

          // Show flag under correct country
          const flagDiv = document.createElement("div");
          flagDiv.className = "flag";

          const img = document.createElement("img");
          img.src = `https://flagcdn.com/w320/${country.code}.png`;

          flagDiv.appendChild(img);
          card.appendChild(flagDiv);

          // Remove from remaining questions
          remainingCountries = remainingCountries.filter(
            c => c.code !== country.code
          );

          // Add to answered countries
          foundCountries.push(country);

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
  remainingCountries = [...countries]; // copy
  render();
};

nextBtn.onclick = () => {
  if (mode === "quiz") {
    render();
  }
};

render();
