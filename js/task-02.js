const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const elements = ingredients.map((option) => {
  const newList = document.createElement("li");
  newList.classList.add("item");
  newList.textContent = option;
  return newList;
});
console.log(elements);

const newIngredients = document.querySelector("#ingredients");
newIngredients.append(...elements);
