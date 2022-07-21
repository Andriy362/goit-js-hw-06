const newRefs = document.querySelector("#validation-input");

newRefs.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length === Number(newRefs.dataset.length)) {
    newRefs.classList.add("valid");
    newRefs.classList.remove("invalid");
  } else {
    newRefs.classList.remove("valid");
    newRefs.classList.add("invalid");
  }
}
