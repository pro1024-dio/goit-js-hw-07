const input = document.querySelector("input#font-size-control");
const span = document.querySelector("span#text");

const handlerInput = (event) => {
    span.style.fontSize = `${event.target.value}px`;
    
    console.log(span.style);
}

input.addEventListener('input', handlerInput);