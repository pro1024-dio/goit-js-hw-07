const anonymousText = 'незнайомецю';
const input = document.querySelector("input#name-input");
const output = document.querySelector("span#name-output");

const handlerInput = () => {
    if (input.value !== "")
        output.textContent = input.value;
    else
        output.textContent = anonymousText;
};

input.addEventListener('input', handlerInput);