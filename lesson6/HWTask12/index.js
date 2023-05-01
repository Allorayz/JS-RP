'use strict';

// put your code here
function removeDuplicates(arr) {
	const empty = [];
	if (!Array.isArray(arr)) {
		return null;
	}

	for (let i = 0; i < arr.length; i += 1) {
		if (empty.includes(arr[i])) {
			continue;
		}
		empty.push(arr[i]);
	}
	return empty;
}

console.log(removeDuplicates([2, 2, 3, 3, 4, 4, 4, 4, 4, 4])); // => [2,3,4]
