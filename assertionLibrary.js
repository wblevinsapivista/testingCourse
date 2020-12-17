const { sum, sub } = require('./math');


test('sum adds numbers', () => {
    let expected = 10;
    let result = sum(3, 7);
    expect(result).toBe(expected);
});

test('sub subtracts numbers', () => {
    let expected = 7;
    let result = sub(10, 3);
    expect(result).toBe(expected);
});

function test(title, callback) {
    try {
        callback();
        console.log(`✔ ${title}`)
    } catch (e) {
        console.error(`X ${title}`);
        console.error(e);
    }
}

function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`Expected ${actual} to be ${expected}`);
            }
        }
    }
}