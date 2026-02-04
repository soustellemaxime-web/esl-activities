import {
  servicesData,
  servicesRelatedWords
} from "../data/servicesData.js";

export function renderServices(gameArea) {
  gameArea.innerHTML = `
    <p>Grouping activity coming soon 🚑🚒🚓</p>
  `;

  // TEMP: log data so we confirm everything is wired
  console.log("Main words:", servicesData);
  console.log("Related words:", servicesRelatedWords);
}
