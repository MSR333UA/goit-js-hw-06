const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", SubmitForm);

function SubmitForm(el) {
  el.preventDefault();
  const {
    elements: { email, password },
  } = el.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  const formData = {
    email: email.value,
    password: password.value,
  };
  console.log(formData);
  el.currentTarget.reset();
}
