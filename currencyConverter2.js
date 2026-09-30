const CURRENCY_RATES = {
    eur: 1.0,
    usd: 1.18,
    gbp: 0.85,
    jpy: 130.0,
    cad: 1.25
};

function convert(amount, sourceCurrency, targetCurrency) {
    const SOURCE = sourceCurrency.toLowerCase();
    const TARGET = targetCurrency.toLowerCase();

    let convertedAmount = amount * (CURRENCY_RATES[TARGET] /
        CURRENCY_RATES[SOURCE]);

        console.log(amount, sourceCurrency.toUpperCase(),"=",
        convertedAmount.toFixed(2),
        targetCurrency.toUpperCase());

    return convertedAmount.toFixed(2);
}


//Object.keys(object) returns an array of the object’s own enumerable property names.

function listConversions(amount, sourceCurrency) {
    for (const targetCurrency in CURRENCY_RATES) {
        if (targetCurrency === sourceCurrency.toLowerCase()) continue;
        convert(amount, sourceCurrency, targetCurrency)
    }
}

listConversions(20, "eur");