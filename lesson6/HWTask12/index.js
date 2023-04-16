'use strict';

// put your code here
function removeDuplicates(arr) {
	const array = [];
	if (!Array.isArray(arr)) {
		return null;
	}

	for (let i of arr) {
		if (!array.includes(i)) {
			array.push(i);
		}
	}
	return array;
}

console.log(removeDuplicates([2, 2, 2, 3, 4, 4, 5]));
removeDuplicates([2, 2, 3, 4, 4, 5]); // => 2,3,4,5
