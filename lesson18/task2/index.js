'use strict';

export const wallet = {
	transactions: [1, 23, 25, -26, 300],

	getMax() {
		return Math.max(...this.transactions);
	},

	getMin() {
		return Math.min(...this.transactions);
	},
};

console.log(wallet.getMax());
console.log(wallet.getMin());
