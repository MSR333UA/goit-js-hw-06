const nameInputEl = document.querySelector("input#name-input");
const nameOutputEl = document.querySelector("span#name-output");
nameInputEl.addEventListener(
  "input",
  (enterName) =>
    (nameOutputEl.textContent =
      enterName.currentTarget.value === ""
        ? "Anonymous"
        : enterName.currentTarget.value)
);
