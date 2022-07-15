const numberCategories = document.querySelectorAll(".item");
console.log("Number of categories:", numberCategories.length);

numberCategories.forEach((element) => {
  const numberCategoriess = element.querySelector("h2");
  console.log("Category:", numberCategoriess.textContent);

  const last = element.querySelectorAll("ul > li");
  console.log("Elements:", last.length);
});
