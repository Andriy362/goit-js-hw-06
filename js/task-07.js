const newFontsize = {
  input: document.querySelector("#font-size-control"),
  userText: document.querySelector("#text"),
};

newFontsize.input.addEventListener("input", onInputSize);

function onInputSize(event) {
  newFontsize.userText.style.fontSize = event.currentTarget.value + "px";
}
