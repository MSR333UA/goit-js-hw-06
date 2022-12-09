const sizeControlEl = {
  input: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};
sizeControlEl.input.addEventListener("input", function () {
  sizeControlEl.text.style.fontSize = `${sizeControlEl.input.value}px`;
});
