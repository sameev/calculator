let buffer = '0'
let runningTotal = 0;
let prevOperator;
const screen = document.querySelector('.screen');

//general event listener for any button click
const buttonClick = (value) => {
  // console.log(value);
  isNaN(parseInt(value)) 
    ? handleSymbol(value) 
    : handleNumber(value)

  screen.innerText = buffer;
}

//helper function for number button click
const handleNumber = (number) => {
  // console.log('handling number');

  buffer === '0' ?
    buffer = number :
    buffer += number;
}

//helper function for operator button click
const handleSymbol = (symbol) => {
  // console.log('handling symbol')

  switch(symbol) {
    case 'C':
      buffer = '0';
      break;
    
    case '←':
      buffer.length === 1 ?
        buffer = '0' :
        buffer = buffer.slice(0, buffer.length - 1)
        // console.log(buffer)
      break
    
    case '=':
      // console.log('equals');
      if(prevOperator === null) return
      flushOperation(parseInt(buffer));
      prevOperator = null;
      buffer = runningTotal.toString();
      runningTotal = 0;
      break;

    case '÷':
    case 'x':
    case '-':
    case '+':
      handleOperator(symbol);
      break;
  }
}

//helper function to handle operator symbol clicks
const handleOperator = (operator) => {
  // console.log('handling operator');
  if(buffer === '0') return;

  const intBuffer = parseInt(buffer);

  if(runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }
  
  prevOperator = operator;
  buffer = '0';
  // console.log({runningTotal})
}

//helper function to 
const flushOperation = (intBuffer) => {
  if(prevOperator === '+') {
    runningTotal += intBuffer;
  } else if (prevOperator === '-') {
    runningTotal -= intBuffer;
  } else if (prevOperator === '÷') {
    runningTotal /= intBuffer;
  } else {
    runningTotal *= intBuffer;
  }
}

const initialize = () => {
  document
    .querySelector('.calc-buttons')
    .addEventListener('click', (event) => {
      buttonClick(event.target.innerText)
    })
}

initialize();