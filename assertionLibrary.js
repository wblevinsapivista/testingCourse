const { sum, sub } = require('./math');

let expected, result;
expected  = 10;
result = sum(3, 7);
expect(result).toBe(10);

expected = 7;
result = sub(10, 3);
expect(result).toBe(7);

function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`Expected ${actual} to be ${expected}`);
            }
        }
    }
}