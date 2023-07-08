export function squaredNumbers() {
	const number = document.querySelectorAll('.number');
	number.forEach(function (num) {
		num.dataset.squaredNum = num.dataset.number * num.dataset.number;
	});
}
