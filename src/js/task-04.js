


const counterValue = document.querySelector("#value");
const firstBtn = document.querySelector('button[data-action="decrement"]');
const secondBtn = document.querySelector('button[data-action="increment"]');

firstBtn.addEventListener("click", (event) => {
  counterValue.addEventListener("click", onTargetbtn);

  console.log("s41");
});

secondBtn.addEventListener("click", (event) => {
  counterValue.removeEventListener("click", onTargetbtn);

  console.log("sss");
});

function onTargetbtn(event) {}
