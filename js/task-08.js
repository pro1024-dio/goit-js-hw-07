const INIT_BOX_SIZE = 30;
const INC_BOX_SIZE = 10;
const controls = document.querySelector("div#controls");
const boxes = document.querySelector("div#boxes");

function getRandomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
}

function destroyBoxes() {
    boxes.innerHTML = '';
};

function createBoxes(amount) {
    const markupArray = [];
    console.log(`Для створення блоків передано: ${amount}`);
    
    const getBoxSize = index => INIT_BOX_SIZE + index * INC_BOX_SIZE;

    if (boxes.children.length !== 0) {
        if (confirm(`Колекція містить створених ${boxes.children.length} блоків. Для продовження необхідно очистити колекцію.
        Очистити колекцію?`)) destroyBoxes();
        else return;
    };
    
    for (let i = 1; i <= amount; i++) {
        let elmMarkup = "";
        elmMarkup = `<div style="position: absolute; z-index: ${amount-i}; background-color: ${getRandomColor()}; height: ${getBoxSize(i)}px; width: ${getBoxSize(i)}px"></div>`;
        markupArray.push(elmMarkup);
    };

    boxes.insertAdjacentHTML('afterbegin', markupArray.join(""));
 };

const handlerClick = (event) => {
    const elm = event.target;

    if (elm.nodeName === "BUTTON")
        switch (elm.dataset.action) {
            case 'render':
                const inputValue = Number(controls.querySelector("input").value);
                createBoxes(inputValue);
                break;
            case 'destroy':
                destroyBoxes();
                break;
        }
};

const handlerChange = (event) => {
    const elm = event.target;

    if (elm.nodeName === "INPUT") {
        if (Number(elm.value) < Number(elm.getAttribute('min')))
            elm.value = Number(elm.getAttribute('min'));
        if (Number(elm.value) > Number(elm.getAttribute('max')))
            elm.value = Number(elm.getAttribute('max'));
    }
};

controls.addEventListener('click', handlerClick);
controls.addEventListener('change', handlerChange);