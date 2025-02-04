const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3));

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = (amountEuro) => {
    let valueInDollar = amountEuro * oneEuroIs.USD;
    return Math.round(valueInDollar)
}

const fromDollarToYen = (amountDollar) => {
    let fromDollartoEuro = amountDollar / oneEuroIs.USD;
    let fromEuroToYen = fromDollartoEuro * oneEuroIs.JPY
    return Math.round(fromEuroToYen)
}

const fromYenToPound = (amountYen) => {
    let fromYenToEuro = amountYen / oneEuroIs.JPY
    let fromEuroToPound = fromYenToEuro * oneEuroIs.GBP
    return Math.round(fromEuroToPound)
}

module.exports = {fromEuroToDollar, sum, fromDollarToYen, fromYenToPound}