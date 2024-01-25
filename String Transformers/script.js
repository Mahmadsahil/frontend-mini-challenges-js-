const userInput = document.querySelector("#inp");

const lowerCase = document.querySelector("#lowercase");
const upperCase = document.querySelector("#uppercase");
const camelCaseEl = document.querySelector("#camelcase");
const pascalCase = document.querySelector("#pascalcase");
const snakeCase = document.querySelector("#snakecase");
const kebabCase = document.querySelector("#kebabcase");
const trim = document.querySelector("#trim");

function transform({ text = userInput.value.trim() }) {
    const camelCase = text
    .toLowerCase()
    .split(' ')
    .reduce((a, b) => a + b[0]?.toUpperCase() + b.substring(1)?.toLowerCase());

    lowerCase.textContent = text.toLowerCase();
    upperCase.textContent = text.toUpperCase();
    camelCaseEl.textContent = camelCase;
    pascalCase.textContent = camelCase ? camelCase[0]?.toUpperCase() + camelCase.substring(1) : '';
    snakeCase.textContent = text.split(' ').join('_');
    kebabCase.textContent = text.split(' ').join('-');
    trim.textContent = text.split(' ').join('');
}

userInput.addEventListener("input", transform);
transform({});