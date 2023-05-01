'use strict';

// !  функция вернет массив возведенный в квадрат

function squareArray(arr) {
	if (!Array.isArray(arr)) {
		return null;
	}
	return arr.map(num => num * num);
}

const initArray = [10, 10, 10]; // => [100,100,100]
const initArray2 = [0, 0, 1, 3]; // => [0,0,1,9]
const initArray3 = [-1, 0, 1, 1]; // => [1,0,1,1]
const initArray4 = 'hell'; // => null

console.log(squareArray(initArray));
console.log(squareArray(initArray2));
console.log(squareArray(initArray3));
console.log(squareArray(initArray4));
