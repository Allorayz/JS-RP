function cloneArr(arr) {
	let clone = [];
	if (!Array.isArray(arr)) {
		return null;
	}
	return (clone = [...arr]);
}

const init = [1, 2, 3, 4];
cloneArr(init);
console.log(cloneArr(init));
console.log(init);
