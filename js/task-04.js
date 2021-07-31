let counterValue = 0;

const span = document.querySelector("span#value");
const counter = document.querySelector("div#counter");

function decrement() {
    counterValue--;
    span.textContent = counterValue;
};

function increment() {
    counterValue++;
    span.textContent = counterValue;
};

const handleClick = (event) => {
    if (event.target.nodeName !== "BUTTON") return;
    switch (event.target.dataset.action) {
        case 'decrement':
            decrement();
            break;
        case 'increment':
            increment();
    }
};

counter.addEventListener("click", handleClick);