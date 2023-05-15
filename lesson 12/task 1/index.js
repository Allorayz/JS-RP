'use strict';

// put your code here

const calc = string => {
	let result;
	const [a, operator, b] = string.split(' ');
	switch (operator) {
		case '+':
			result = Number(a) + Number(b);
			break;
		case '-':
			result = Number(a) - Number(b);
			break;
		case '*':
			result = Number(a) * Number(b);
			break;
		case '/':
			result = Number(a) / Number(b);
			break;
	}
	return `${string} = ${result}`;
};

console.log(calc('24 / 4'));
