'use strict';

// put your code here
function sortAsc(array) {
	if (!Array.isArray(array)) return null;
	array.sort(function (a, b) {
		return a - b;
	});
	return array;
}

function sortDesc(array) {
	if (!Array.isArray(array)) return null;
	array.sort(function (a, b) {
		return b - a;
	});
	return array;
}
