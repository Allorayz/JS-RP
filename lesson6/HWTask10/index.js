const getSubArray = (arr, numberOfElements) => arr.slice(0, numberOfElements);

getSubArray([11, 4, 8, 3], 2); // => [11,4]
console.log(getSubArray([11, 4, 8, 3], 2));
getSubArray([11, 4, 8, 3], 3); // => [11,4,8]
console.log(getSubArray([11, 4, 8, 3], 3));
