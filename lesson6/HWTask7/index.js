'use strict';

// put your code here
function checker(arr) {
	if (!Array.isArray(arr)) {
		return null;
	}

	const sumMinMax = Math.min.apply(null, arr) + Math.max.apply(null, arr);
	console.log(sumMinMax);
	if (sumMinMax > 1000) {
		return true;
	}
	return false;
}

checker([1, 2, 3, 4, 500]);
console.log(checker([1, 2, 3, 4, 5000]));
