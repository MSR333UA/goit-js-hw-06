const validationEl = document.querySelector("#validation-input");

validationEl.addEventListener("blur", validationInput);

function validationInput() {
  if (validationEl.value.length === 6) {
    validationEl.classList.remove("invalid");
    validationEl.classList.add("valid");
    return;
  }
  validationEl.classList.add("invalid");
  validationEl.classList.remove("valid");
}
