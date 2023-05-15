'use strict';

// put your code here
const cleanTransactionList = transactions =>
	transactions.filter(el => el >= 0).map(el => '$' + Number(el).toFixed(2));

console.log(cleanTransactionList(['    1.9', '16.4', 17, ' 1 d', 0]));
