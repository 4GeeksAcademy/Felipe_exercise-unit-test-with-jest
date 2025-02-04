const {fromEuroToDollar, sum, fromDollarToYen, fromYenToPound} = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9)
    expect(total).toBe(23);
})

test("One euro should be 1.07 dollars", () => {
    const dollars = fromEuroToDollar(3.5);

    const expected = 3.5 * 1.07

    expect(fromEuroToDollar(3.5)).toBe(4);
})

test("One dollar should be 146 yen", () => {
    const yen = fromDollarToYen(1)

    expect(yen).toBe(146);
})

test("One hundred yen should be 1 British Pound", () => {
    const britishPound = fromYenToPound(100)

    expect(britishPound).toBe(1);
})