const listCategories = document.querySelectorAll('ul#categories > li.item');

// function elementProcessing(elements) {

//     for (let el of elements) {
//         switch (el.tagName.toUpperCase()) {
//             case "H2":
//                 console.log(`Категорія: ${el.textContent}`);
//                 break;
//             case "UL":
//                 console.log(`Кількість елементів: ${el.children.length}`);
//                 break;
//         };
//     };
// };

console.log(`У списку ${listCategories.length} категорії.`);
listCategories.forEach(categorie => {
    console.log(`Категорія: ${categorie.firstElementChild.textContent}`);
    console.log(`Кількість елементів: ${categorie.lastElementChild.children.length}`);
    // elementProcessing(categorie.children)
});