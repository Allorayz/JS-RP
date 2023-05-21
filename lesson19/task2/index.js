'use strict';

export const getOwnProps = obj => {
	const resultArr = [];
	for (let prop in obj) {
		if (obj.hasOwnProperty(prop) && typeof obj[prop] !== 'function') {
			resultArr.push(prop);
		}
	}
	return resultArr;
};

const user = {
	name: 'John',
	age: 30,
};
console.log(getOwnProps(user));
