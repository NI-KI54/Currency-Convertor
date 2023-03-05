const firstCurrencyEl = document.getElementById("first-currency");
const firstWorthEL = document.getElementById("first-worth");
const secondCurrencyEl = document.getElementById("second-currency");
const secondWorthEL = document.getElementById("second-worth");
const exchangeRateEl = document.getElementById("exchange-rate");

updateRate();

function updateRate() {
    fetch(` https://v6.exchangerate-api.com/v6/c6c74f52dd602c679a5f1a61/latest/${firstCurrencyEl.value}`).then((res) => res.json()).then((data) => {const rate = data.conversion_rates[secondCurrencyEl.value];
    console.log(rate);
    exchangeRateEl.innerText = `1 ${firstCurrencyEl.value} = ${rate + " " + secondCurrencyEl.value}`;

    secondWorthEL.value = (firstWorthEL.value * rate).toFixed(2);

    });
}

firstCurrencyEl.addEventListener("change", updateRate);

secondCurrencyEl.addEventListener("change", updateRate);

firstWorthEL.addEventListener("input", updateRate);