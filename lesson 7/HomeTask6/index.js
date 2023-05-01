'use strict';

const sum = arr => {
	if (!Array.isArray) {
		return null;
	}
	return arr.reduce((acc, num) => acc + num);
};

const init = [2, 5, 6, 3, -1, 0, 3]; // => 18

console.log(sum(init));
