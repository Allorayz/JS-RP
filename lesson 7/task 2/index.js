'use strict';

const sortDesc = arr => arr.slice().sort((a, b) => b - a);

const array = [1, 5, 2, 10, 7]; // => [10,7,5,2,1]
console.log(sortDesc(array));
