'use strict';

export const getMinSquareNumber = arr => {
	if (!Array.isArray(arr) || arr.length === 0) {
		return null;
	}
	const result = arr.map(elem => elem * elem);
	return Math.min(...result);
};
