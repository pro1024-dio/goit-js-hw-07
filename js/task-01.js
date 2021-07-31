const listCategories = document.querySelectorAll('ul#categories > li.item');

function elementProcessing(element) {
    const childElm = element.children;

    for (let el of childElm) {
        switch (el.tagName) {
            case "H2":
                console.log(`Категорія: ${el.textContent}`);
                break;
            case "UL":
                console.log(`Кількість елементів: ${el.children.length}`);
                break;
        };
    };
};

console.log(`У списку ${listCategories.length} категорії.`);
listCategories.forEach(categorie => elementProcessing(categorie));