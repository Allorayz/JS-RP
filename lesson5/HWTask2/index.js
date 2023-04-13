'use strict';

// put your code here
function increaser(a, index) {
	if (a > index) {
		a += index;
	}
	return a;
}
console.log(increaser(1, 10));
