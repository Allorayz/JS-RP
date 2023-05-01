'use strict';

const arrAverage = arr => {
	if (!Array.isArray) {
		return null;
	}
	return arr.reduce((acc, num) => acc + num) / arr.length;
};

const init = [2, 5, 6, 3]; // => output 4

console.log(arrAverage(init));
