const VALID_CLASS_NAME = 'valid';
const INVALID_CLASS_NAME = 'invalid';
const input = document.querySelector("input#validation-input");

const handlerBlur = (event) => {
    const elm = event.target;
    if (elm.value.length === Number(elm.dataset.length)) {
        elm.classList.add(VALID_CLASS_NAME);
        elm.classList.remove(INVALID_CLASS_NAME);
        // if (elm.classList.length != 1)
        //     elm.classList.replace(INVALID_CLASS_NAME, VALID_CLASS_NAME);
        // else
        //     elm.classList.add(VALID_CLASS_NAME);
        // if (elm.classList.contains(INVALID_CLASS_NAME))
        //     elm.classList.remove(INVALID_CLASS_NAME);
        // if (!elm.classList.contains(VALID_CLASS_NAME))
        //     elm.classList.add(VALID_CLASS_NAME);
    }
    else {
        elm.classList.add(INVALID_CLASS_NAME);
        elm.classList.remove(VALID_CLASS_NAME);
        // if (elm.classList.length != 1)
        //     elm.classList.replace(VALID_CLASS_NAME, INVALID_CLASS_NAME);
        // else
        //     elm.classList.add(INVALID_CLASS_NAME);
        // if (elm.classList.contains(VALID_CLASS_NAME))
        //     elm.classList.remove(VALID_CLASS_NAME);
        // if (!elm.classList.contains(INVALID_CLASS_NAME))
        //     elm.classList.add(INVALID_CLASS_NAME);
    }
};

input.addEventListener('blur', handlerBlur);