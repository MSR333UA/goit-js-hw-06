const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngEl = document.querySelector("#ingredients");

const Elements = ingredients.map((ingredient) => {
  const itemIngEl = document.createElement("li");
  itemIngEl.classList.add("item");
  itemIngEl.textContent = ingredient;
  return itemIngEl;
});
listIngEl.append(...Elements);
