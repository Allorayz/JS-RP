'use strict';

const reverseString = str => {
	if (typeof str !== 'string') {
		return null;
	}
	return str.split('').reverse().join('');
};

// 'abcd' => 'dcba'
console.log(reverseString('abcd'));
