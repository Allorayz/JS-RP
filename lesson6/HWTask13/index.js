'use strict';

function uniqueCount(arr) {
	if (!Array.isArray) {
		return null;
	}
	const empty = [];

	for (let i = 0; i < arr.length; i += 1) {
		if (empty.includes(arr[i])) {
			continue;
		}
		empty.push(arr[i]);
	}
	return empty.length;
}

console.log(uniqueCount([2, 2, 2, 3, 4, 5]));
uniqueCount([2, 2, 2, 3, 4, 5, 5]);
