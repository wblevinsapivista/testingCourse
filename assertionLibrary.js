const { sumAsync, subAsync } = require('./math');


test('sum adds numbers', async () => {
    let expected = 10;
    let result = await sumAsync(3, 7);
    expect(result).toBe(expected);
});

test('sub subtracts numbers', async () => {
    let expected = 7;
    let result = await subAsync(10, 3);
    expect(result).toBe(expected);
});

async function test(title, callback) {
    try {
        await callback();
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