//USD to EUR
function convertUSDtoEUR(amount) {
    const exchangeRate = 0.85; // Example exchange rate
    return amount * exchangeRate;
}

//EUR to USD
function convertEURtoUSD(amount) {
    const exchangeRate = 1.18; // Example exchange rate
    return amount * exchangeRate;
}

let amount = 100;
let currency = "EUR"; // Change this to "USD" or "EUR" to test different conversions

// const is a variable that cannot be reassigned
if (currency === "USD") {
    const result = convertUSDtoEUR(amount);
    console.log(amount + " USD = " + result + " EUR");
} else if (currency === "EUR") {
    const result = convertEURtoUSD(amount);
    console.log(amount + " EUR = " + result + " USD");
} else {
    console.log("Unsupported currency: " + currency);
}











 
