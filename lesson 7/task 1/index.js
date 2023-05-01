'use strict';

const getSpecialNumbers = num => num.filter(number => number % 3 === 0);
const numbers = [1, 2, 3, 6, 9, 10, 30, 25, 60];

console.log(getSpecialNumbers(numbers));
