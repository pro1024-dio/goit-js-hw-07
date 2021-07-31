const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const elementsArray = [];
const listElement = document.querySelector('#ingredients');

for (let ingredient of ingredients) {
  const itemListElement = document.createElement("li");
  itemListElement.textContent = ingredient;
  elementsArray.push(itemListElement);
}

listElement.prepend(...elementsArray);