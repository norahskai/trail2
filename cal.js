function appendValue(value) {
	document.getElementById('result').value += value;
  }
  
  function clearResult() {
	document.getElementById('result').value = '';
  }
  
  function calculate() {
	let expression = document.getElementById('result').value;
	let operator = '';
	let numbers = [];
  
	if (expression.includes('+')) {
	  operator = '+';
	  numbers = expression.split('+');
	} else if (expression.includes('-')) {
	  operator = '-';
	  numbers = expression.split('-');
	} else if (expression.includes('*')) {
	  operator = '*';
	  numbers = expression.split('*');
	} else if (expression.includes('/')) {
	  operator = '/';
	  numbers = expression.split('/');
	}
  
	if (operator !== '' && numbers.length === 2) {
	  let num1 = parseFloat(numbers[0]);
	  let num2 = parseFloat(numbers[1]);
	  let result;
  
	  if (operator === '+') {
		result = num1 + num2;
	  } else if (operator === '-') {
		result = num1 - num2;
	  } else if (operator === '*') {
		result = num1 * num2;
	  } else if (operator === '/') {
		result = num1 / num2;
	  }
  
	  document.getElementById('result').value = result;
	}
  }