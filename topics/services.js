import { servicesData, servicesRelatedWords } from "../data/servicesData.js";

let currentIndex = 0;
let foundRelated = [];

function goToNextMain(gameArea) {
  foundRelated = [];
  currentIndex++;

  if (currentIndex >= servicesData.length) {
    gameArea.innerHTML = `
      <h2>🎉 Well done!</h2>
      <p>You finished all services.</p>
    `;
    return;
  }

  renderServices(gameArea);
}

export function renderServices(gameArea) {
  gameArea.innerHTML = "";

  const currentMain = servicesData[currentIndex];
  const total = currentMain.compounds.length;
  const found = foundRelated.length;

  // --- COUNTER ---
  const counter = document.createElement("div");
  counter.className = "services-counter";
  counter.textContent = `${found} / ${total}`;

  // --- MAIN WORD ---
  const mainContainer = document.createElement("div");
  mainContainer.className = "services-main";

  const mainImg = document.createElement("div");
  mainImg.className = "img-placeholder";
  mainImg.textContent = "📷";

  const mainLabel = document.createElement("div");
  mainLabel.className = "label";
  mainLabel.textContent = currentMain.label;

  mainContainer.appendChild(mainImg);
  mainContainer.appendChild(mainLabel);

  // --- RELATED WORDS ---
  const relatedContainer = document.createElement("div");
  relatedContainer.className = "services-related";

  servicesRelatedWords.forEach(word => {
    const item = document.createElement("div");
    item.className = "related-item";
    item.dataset.id = word.id;

    const img = document.createElement("div");
    img.className = "img-placeholder";
    img.textContent = "📷";

    const label = document.createElement("div");
    label.className = "label";
    label.textContent = word.label;

    item.appendChild(img);
    item.appendChild(label);

    if (foundRelated.includes(word.id)) {
        item.classList.add("correct");
    }

    // 👉 CLICK HANDLER
    item.addEventListener("click", () => {
        const currentMain = servicesData[currentIndex];

        // already found → do nothing
        if (foundRelated.includes(word.id)) return;

        const isCorrect = currentMain.compounds.some(
        c => c.with === word.id
        );

        if (isCorrect) {
            foundRelated.push(word.id);
            item.classList.add("correct");
            const total = currentMain.compounds.length;

            if (foundRelated.length === total) {
                // small delay so students see the last green one
                setTimeout(() => {
                goToNextMain(gameArea);
                }, 600);
            } else {
                renderServices(gameArea);
            }
        }
        
        else {
            item.classList.add("wrong");
            setTimeout(() => item.classList.remove("wrong"), 500);
        }
    });

    relatedContainer.appendChild(item);
    });


  gameArea.appendChild(counter);
  gameArea.appendChild(mainContainer);
  gameArea.appendChild(relatedContainer);
}
