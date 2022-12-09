const firstButtonEL = document.querySelector('button[data-action="increment"]');

const secondButtonEL = document.querySelector(
  'button[data-action="decrement"]'
);

const counterEl = document.querySelector("#value");

let counterValue = 0;

firstButtonEL.addEventListener("click", () => {
  counterValue += 1;

  counterEl.innerHTML = counterValue;
});

secondButtonEL.addEventListener("click", () => {
  counterValue -= 1;

  counterEl.innerHTML = counterValue;
});
