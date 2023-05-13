'use strict';

const array = ['20ersdat', '20.5qwdsaertg', 20, 20.5, NaN, undefined, null];

const getParsedIntegers = arr => arr.map(el => Number.parseInt(el));
console.log(getParsedIntegers(array));

const getParsedIntegersV2 = arr => arr.map(el => parseInt(el));
console.log(getParsedIntegersV2(array));

const getParsedFloats = arr => arr.map(el => Number.parseFloat(el));
console.log(getParsedFloats(array));

const getParsedFloatsV2 = arr => arr.map(el => parseFloat(el));
console.log(getParsedFloatsV2(array));
