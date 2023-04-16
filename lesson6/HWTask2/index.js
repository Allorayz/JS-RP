'use strict';

/**
 * @param {number[]} arr
 * @return {number[]}
 */
function squareArray(arr) {
	let array = [];
	if (!Array.isArray(arr)) {
		return null;
	}
	for (let i of arr) {
		array.push(i * i);
	}
	return array;
}

// examples
console.log(squareArray([1, 10, 9, 11]));
squareArray([1, 10, 9, 11]); // ==> [1, 100, 81, 121]

console.log(squareArray([10, 0, -4]));
squareArray([10, 0, -4]); // ==> [100, 0, 16]

console.log(squareArray([1]));
squareArray([1]); // ==> [1]
