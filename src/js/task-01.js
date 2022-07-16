const numberOfCategories = document.querySelectorAll(".item");
console.log("Number of categories:", numberOfCategories.length);

numberOfCategories.forEach((element) => {
  const numberCategory = element.querySelector("h2");
  console.log("Category:", numberCategory.textContent);

  const numberofElements = element.querySelectorAll("ul > li");
  console.log("Elements:", numberofElements.length);
});
