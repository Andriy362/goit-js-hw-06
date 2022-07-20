function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const сhangeColor = {
  bodyEl: document.querySelector("body"),
  anotherColor: document.querySelector(".change-color"),
  textColor: document.querySelector(".color"),
};

сhangeColor.bodyEl.addEventListener("click", handleSubmit);

function handleSubmit() {
  const background = getRandomHexColor();
  сhangeColor.bodyEl.style.backgroundColor = background;
  сhangeColor.textColor.textContent = background;
}
