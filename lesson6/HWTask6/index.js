function cloneArr(arr) {
	const array = [];
	if (!Array.isArray(arr)) {
		return null;
	}

	for (let i of arr) {
		array.push(i);
	}
	return array;
}

console.log(cloneArr([1, 2, 3, 4, 5]));
cloneArr([1, 2, 3, 4, 5]);
