'use strict';

const withdraw = (clients, balances, client, amount) => {
	if (balances[clients.indexOf(client)] < amount) {
		return -1;
	}
	return balances[clients.indexOf(client)] - amount;
};

console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));
