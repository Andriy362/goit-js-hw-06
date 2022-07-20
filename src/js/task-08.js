const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    const message = "Email and password not found!";
    alert(message);
  } else {
    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
      console.log(value);
      console.log(name);
    });
  }
  form.reset();
}
