const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  console.log(formData);

  formData.forEach((email, password) => {
    console.log("почта", email);
    console.log("пароль", password);
  });
}

// const {
//   elements: { email, password },
// } = event.currentTarget;

// if (email.value === "" || password.value === "") {
// }
// event.currentTarget.reset();
// }
