'use strict';

// put your code here
// ! VAR 1
function createEmptyArray(len) {
	const arr = [];
	arr.length = len;
	return arr;
}

// ! VAR 2

const createEmptyArray = len => new Array(len);

createEmptyArray(7);
console.log(createEmptyArray(7));
