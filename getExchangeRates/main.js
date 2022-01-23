const from_currency = document.querySelector('#currency-one');
const to_currency = document.querySelector('#currency-two');
const amount_from_value = document.querySelector('#value_currency_a');
const amount_to_value = document.querySelector('#value_currency_b');

// Fetch exchange rates and update the DOM
function caclulate() {
    const currency_one = from_currency.value;
    const currency_two = to_currency.value;
  
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        const rate = data.rates[currency_two];
        amount_to_value.value = (amount_from_value.value * rate).toFixed(2);
      });
}



from_currency.addEventListener('change', caclulate);
to_currency.addEventListener('change', caclulate);
amount_from_value.addEventListener('input', caclulate);
amount_to_value.addEventListener('input', caclulate);

caclulate();