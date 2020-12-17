const sum = (a, b) => a + b;
const sub = (a, b) => a - b;

let expected = 10;
let result = sum(3, 7);
if (result !== 10) {
    throw new Error(`${result} is not equal to ${expected}`);
}

expected = 7;
result = sub(10, 3);
if (result !== 7) {
    throw new Error(`${result} is not equal to ${expected}`);
}