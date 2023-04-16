'use strict';

/**
 * @param {number[]} arr
 * @return {number[]}
 */
function reverseArray(arr) {
	const array = [];
	if (!Array.isArray(arr)) {
		return null;
	}

	for (let i = arr.length - 1; i >= 0; i -= 1) {
		array.push(arr[i]);
	}
	return array;
}

// examples
console.log(reverseArray([11, 4, 8, 3]));
reverseArray([11, 4, 8, 3]); // ==> [3, 8, 4, 11]

console.log(reverseArray([]));
reverseArray([]); // ==> []

console.log(reverseArray([100, 50]));
reverseArray([100, 50]); // ==> [50, 100]

console.log(reverseArray('hello'));
