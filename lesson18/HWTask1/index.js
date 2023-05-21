export function saveFuncCalls(func) {
	const callsHistory = [];
	return function withMemory(...items) {
		callsHistory.push(items);
		withMemory.calls = callsHistory;
		return func.apply(this, items);
	};
}

function test(a, b) {
	return Math.sqrt(a * a + b * b);
}

const testWithMemory = saveFuncCalls(test);
testWithMemory(3, 2);
testWithMemory(10, 1);

console.log(testWithMemory.calls);
