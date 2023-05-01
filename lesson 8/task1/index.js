// const transformToObject = arr => {
// 	const obj = {};
// 	arr.forEach(el => (obj[el] = el));
// 	return obj;
// };

const transformToObject = arr => {
	const obj = {};
	for (let i in arr) {
		obj[arr[i]] = arr[i];
	}
	return obj;
};

// examples
console.log(transformToObject(['a', 17.1, 'John Doe'])); // ==> { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' }
