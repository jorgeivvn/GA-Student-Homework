var endpoint = 'https://api.fixer.io/latest?base=USD'

var amountContainer = document.getElementById('output_amount')

var currencyContainer = document.getElementById('output_currency')


function convertCurrency(event) {
  if ('type' in event.target && event.target.type === 'button') {
    console.log('handle currency conversion here');
    $.get(endpoint, (response) => {
      processResponse(response);
    })
  }
}

document.body.addEventListener('click', convertCurrency);

// function renderHTML () {
//
// }

//pseudocode- 1. If type/button is clicked, loop through to GET value/currency associated with button clicked, and POST output amount and output currency.
