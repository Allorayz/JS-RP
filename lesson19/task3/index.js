'use strict';

export function User(name, age) {
	this.name = name;
	this.age = age;
}

User.prototype.sayHi = function () {
	console.log(`Hi, I am ${this.name}`);
};

User.prototype.requestNewPhoto = function () {
	console.log(`New photo request was sent for ${this.name}`);
};

User.prototype.setAge = function (numb) {
	if (numb < 0) {
		return false;
	}
	this.age = numb;
	if (numb >= 25) {
		this.requestNewPhoto();
	}
	return numb;
};
