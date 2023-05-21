// algo
// 1. разбить массив на элементы
// 2. возвести каждое число в квадрат
// 3. просуммировать значения квадратов

export function sumOfSquares(...numbers) {
	return [...numbers].reduce((acc, elem) => {
		return acc + elem * elem;
	});
}

// const numbers = [1, -2, 3, 4, -5];
console.log(sumOfSquares(1, 2, 3, 5, 4));
