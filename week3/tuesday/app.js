let endpoint = 'https://api.fixer.io/latest?base=USD'

let amountContainer = document.getElementById('output_amount')

let currencyContainer = document.getElementById('output_currency')


function convertCurrency(event) {
  if ('type' in event.target && event.target.type === 'button') {
    console.log('handle currency conversion here');
    $.get(endpoint, function(response){
      let currencyInUSD = //how do i grab this?
    })
  }
}

document.body.addEventListener('click', convertCurrency);


//To dislay the currency: 
// function renderHTML () {
//
// }

//pseudocode- 1. If type/button is clicked, loop through to GET value/currency associated with button clicked, and POST output amount and output currency.
