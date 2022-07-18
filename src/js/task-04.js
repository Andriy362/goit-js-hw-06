const newCounter = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

const counterValue = document.querySelector("#value");
const firstBtn = document.querySelector('button[data-action="decrement"]');
const secondBtn = document.querySelector('button[data-action="increment"]');

secondBtn.addEventListener("click", () => {
  newCounter.increment();
  counterValue.textContent = newCounter.value;
});

firstBtn.addEventListener("click", () => {
  newCounter.decrement();
  counterValue.textContent = newCounter.value;
});

