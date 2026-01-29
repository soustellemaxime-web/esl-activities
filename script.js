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

const grid = document.getElementById("countriesGrid");

countries.forEach(country => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="country">${country.name}</div>
    <div class="flag">
      <img src="https://flagcdn.com/w320/${country.code}.png" />
    </div>
  `;

  const img = card.querySelector("img");
  img.style.display = "none";

  card.addEventListener("click", () => {
    img.style.display = img.style.display === "none" ? "block" : "none";
  });

  grid.appendChild(card);
});
