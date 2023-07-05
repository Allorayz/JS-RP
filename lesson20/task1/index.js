'use strict';

export class User {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	sayHi() {
		console.log(`Hi, I am ${this.name}`);
	}

	requestNewPhoto() {
		console.log(`New photo request was sent for ${this.name}`);
	}
	setAge(newAge) {
		if (newAge < 0) {
			return false;
		}
		if (newAge >= 25) {
			console.log(`New photo request was sent for ${this.name}`);
		}
		return (this.age = newAge);
	}

	static createEmpty() {
		return new User('', null);
	}
}
