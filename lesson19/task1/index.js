'use strict';

export const vehicle = {
	name: 'Argo',
	move() {
		console.log(`${this.name} is moving`);
	},
	stop() {
		console.log(`${this.name} stopped`);
	},
};

export const ship = {
	startMachine() {
		console.log(`${this.name} lifting anchor up`);
		ship.move();
	},
	stopMachine() {
		console.log(`${this.name} lifting anchor down`);
		ship.stop();
	},
};

Object.setPrototypeOf(ship, vehicle);
