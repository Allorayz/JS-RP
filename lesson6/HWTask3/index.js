'use strict';

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkSum = arr => {
	let sum = 0;
	if (!Array.isArray(arr)) {
		return null;
	}
	for (let i = 0; i < arr.length; i += 1) {
		sum += arr[i];
	}
	if (sum > 100) {
		return true;
	}
	return false;
};

// examples
console.log(checkSum([10, 10, 10]));
checkSum([10, 10, 10]); // ===> false

console.log(checkSum([10, 99, 1]));
checkSum([10, 99, 1]); // ===> true

console.log(checkSum([-6, -3, 200]));
checkSum([-6, -3, 200]); // ===> true

console.log(checkSum([101]));
