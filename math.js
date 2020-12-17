const sum = (a, b) => a + b;
const sub = (a, b) => a - b;

const sumAsync = (a, b) => Promise.resolve(sum(a, b))
const subAsync = (a, b) => Promise.resolve(sub(a, b))

module.exports = { sum, sub, sumAsync, subAsync };