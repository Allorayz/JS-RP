'use strict';

// put your code here
const copyObj = obj => Object.assign({}, obj);

const obj1 = { a: 1, b: 2, c: 3 };

copyObj(obj1); // { a: 1, b: 2, c:
console.log(copyObj(obj1));
