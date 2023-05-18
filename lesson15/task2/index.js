'use strict';

export const createCalculator = () => {
	let result = 0;
	const add = num => (result += num);
	const decrease = num => (result -= num);
	const reset = () => (result = 0);
	const getMemo = () => result;
	return {
		add,
		decrease,
		reset,
		getMemo,
	};
};

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1()); // 0
console.log(counter1()); // 1
console.log(counter2()); // 0
console.log(counter1()); // 2
console.log(counter2()); // 1
