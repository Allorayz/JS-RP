'use strict';

/**
 * @param {number[]} arr
 * @return {number}
 */

// ! #1
// function getSum(arr) {
// 	let sum = 0;
// 	if (!Array.isArray(arr)) {
// 		return null;
// 	}
// 	for (let i = 0; i < arr.length; i += 1) {
// 		sum += arr[i];
// 	}
// 	return sum;
// }

// ! #2

function getSum(arr) {
	let sum = 0;
	if (!Array.isArray(arr)) {
		return null;
	}
	for (let i of arr) {
		sum += i;
	}
	return sum;
}

// examples
console.log(getSum([1, 10, -10, 4]));
getSum([1, 10, -10, 4]); // ==> 5

console.log(getSum([1]));
getSum([1]); // ==> 1

console.log(getSum([-8, 8]));
getSum([-8, 8]); // ==> 0

console.log(getSum(10, 12, 14));
getSum(10, 12, 14); // ==> null
