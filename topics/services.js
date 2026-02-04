import { servicesData, servicesRelatedWords } from "../data/servicesData.js";

let currentIndex = 0;
let foundRelated = [];
let foundCompoundsHistory = [];
let servicesFinished = false;

function goToNextMain(gameArea) {
  foundRelated = [];
  currentIndex++;

  if (currentIndex >= servicesData.length) {
  servicesFinished = true;
  renderServices(gameArea);
  return;
}

  renderServices(gameArea);
}

export function renderServices(gameArea) {
  // Check if all services are finished
  if (servicesFinished) {
    gameArea.innerHTML = "";
    const servicesRoot = document.createElement("div");
    servicesRoot.className = "services-root";
    gameArea.appendChild(servicesRoot);

    const title = document.createElement("h2");
    title.textContent = "Great job! These are the answers 👏";

    const compoundsContainer = document.createElement("div");
    compoundsContainer.className = "services-compounds";

    foundCompoundsHistory.forEach(compound => {
      const item = document.createElement("div");
      item.className = "related-item compound-item";

      const img = document.createElement("img");
      img.src = compound.img || compound.mainImg;
      img.className = "services-img";

      const label = document.createElement("div");
      label.textContent = compound.result;

      item.appendChild(img);
      item.appendChild(label);
      compoundsContainer.appendChild(item);
    });

    servicesRoot.appendChild(title);
    servicesRoot.appendChild(compoundsContainer);
    return;
  }


  gameArea.innerHTML = "";

  const servicesRoot = document.createElement("div");
  servicesRoot.className = "services-root";
  gameArea.appendChild(servicesRoot);

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

  const mainImg = document.createElement("img");
  mainImg.className = "services-img";
  mainImg.src = currentMain.img;

  const mainLabel = document.createElement("div");
  mainLabel.className = "label";
  mainLabel.textContent = currentMain.label;

  mainContainer.appendChild(mainImg);
  mainContainer.appendChild(mainLabel);

  // --- Separation ---
  const arrow = document.createElement("div");
  arrow.className = "services-arrow";
  arrow.textContent = "➡️";

  // --- RELATED WORDS ---
  const relatedContainer = document.createElement("div");
  relatedContainer.className = "services-related";

  servicesRelatedWords.forEach(word => {
    const item = document.createElement("div");
    item.className = "related-item";
    item.dataset.id = word.id;

    const img = document.createElement("img");
    img.src = word.img;
    img.className = "services-img";


    const label = document.createElement("div");
    label.className = "label";
    label.textContent = word.label;

    item.appendChild(img);
    item.appendChild(label);

    if (foundRelated.includes(word.id)) {
        item.classList.add("correct");
    }

    // CLICK HANDLER
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
            counter.textContent = `${foundRelated.length} / ${currentMain.compounds.length}`;
            const total = currentMain.compounds.length;

            const compound = currentMain.compounds.find(
              c => c.with === word.id
            );

            if (compound) {
              foundCompoundsHistory.push({
                ...compound,
                mainLabel: currentMain.label,
                mainImg: currentMain.img
              });
            }

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

    const layout = document.createElement("div");
    layout.className = "services-layout";

    layout.appendChild(mainContainer);
    layout.appendChild(arrow);
    layout.appendChild(relatedContainer);

    servicesRoot.appendChild(counter);
    servicesRoot.appendChild(layout);

    // --- FOUND COMPOUNDS SECTION ---
    const foundCompounds = foundCompoundsHistory;

    if (foundCompounds.length > 0) {
      const separator = document.createElement("hr");
      separator.className = "services-separator";

      const compoundsContainer = document.createElement("div");
      compoundsContainer.className = "services-compounds";

      foundCompounds.forEach(compound => {
        const item = document.createElement("div");
        item.className = "compound-item";

        const img = document.createElement("img");
        img.src = compound.img;
        img.className = "services-img";

        const label = document.createElement("div");
        label.textContent = compound.result;

        item.appendChild(img);
        item.appendChild(label);
        compoundsContainer.appendChild(item);
      });

      servicesRoot.appendChild(separator);
      servicesRoot.appendChild(compoundsContainer);
    }

}
