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

