export function squaredNumbers() {
	const squareNum = document.querySelectorAll('.number');
	squareNum.forEach(function (item) {
		item.dataset.squaredNumber = item.dataset.number * item.dataset.number;
	});
}
