function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorEl = document.querySelector(".color");

const buttonChangeEl = document.querySelector(".change-color");
buttonChangeEl.addEventListener("click", () => {
  document.body.style.background = getRandomHexColor();
  colorEl.textContent = getRandomHexColor();
});
