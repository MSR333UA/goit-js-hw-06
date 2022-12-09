const itemEl = document.querySelectorAll(".item");
console.log("Number of categories", itemEl.length);
itemEl.forEach((item) => {
  const titleEl = item.querySelector("h2");
  const itemNumEl = item.querySelectorAll("li");
  console.log(`Category: ${titleEl.textContent}`);
  console.log("Elements:", itemNumEl.length);
});
