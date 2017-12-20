

function convertCurrency(event) {
  if ('type' in event.target && event.target.type === 'button') {
    console.log('handle currency conversion here');
  }
}

document.body.addEventListener('click', convertCurrency);

// function renderHTML () {
//
// }

//pseudocode- 1. If type/button is clicked, loop through to GET value/currency associated with button clicked, and POST output amount and output currency.
