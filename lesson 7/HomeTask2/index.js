'use strict';

function reverseArray(arr) {
	if (!Array.isArray(arr)) {
		return null;
	}

	return arr.slice().reverse();
}

const initArray = [1, 2, 3, 4, 5]; // => [5,4,3,2,1]
const initArray2 = [5, 4, 3, 2, 1]; // => [1,2,3,4,5]
console.log(reverseArray(initArray));
console.log(reverseArray(initArray2));
