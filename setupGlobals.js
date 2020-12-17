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

global.test = test;
global.expect = expect;