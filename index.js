let buffer = '0'
const screen = document.querySelector('.screen');

//general event listener for any button click
const buttonClick = (value) => {
  console.log(value);
  isNaN(parseInt(value)) 
    ? handleSymbol(value) 
    : handleNumber(value)
}

//helper function for number button click
const handleNumber = (number) => {
  console.log('handling number');

  buffer === '0' ?
    buffer = number :
    buffer += number;

  screen.innerText = buffer;
}

//helper function for operator button click
const handleSymbol = (symbol) => {
  console.log('handling symbol')
}


const initialize = () => {
  document
    .querySelector('.calc-buttons')
    .addEventListener('click', (event) => {
      buttonClick(event.target.innerText)
    })
}

initialize();