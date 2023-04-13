/**
 * @param {number} num
 * @return {undefined}
 */

function isPrime(num) {
	for (let i = 2; i < num; i += 1) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}

function getPrimes(num) {
	for (let i = 2; i <= num; i += 1) {
		if (isPrime(i)) {
			console.log(i);
		}
	}
}
