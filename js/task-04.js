let counterValue = 0;

const span = document.querySelector("span#value");
const buttonDec = document.querySelector('[data-action="decrement"]');
const buttonInc = document.querySelector('[data-action="increment"]');

// function decrement() {
//     counterValue--;
//     span.textContent = counterValue;
// };

// function increment() {
//     counterValue++;
//     span.textContent = counterValue;
// };

// const handleClick = (event) => {
//     if (event.target.nodeName !== "BUTTON") return;
//     switch (event.target.dataset.action) {
//         case 'decrement':
//             decrement();
//             break;
//         case 'increment':
//             increment();
//     }
// };

buttonDec.addEventListener("click", () => span.textContent = --counterValue);
buttonInc.addEventListener("click", () => span.textContent = ++counterValue);