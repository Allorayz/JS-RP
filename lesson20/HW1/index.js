'use strict';

/**
 * @field {string} id
 * @field {number} price
 * @field {date} dateCreated
 * @field {boolean} isConfirmed
 * @field {date} dateConfirmed
 * @field {string} city
 * @field {string} type
 */
export class Order {
	constructor(price, city, type, id) {
		this.id = `${Math.floor(Math.random() * 10000 + 1) + 1}`;
		this.price = price;
		this.dateCreated = new Date();
		this.isConfirmed = false;
		this.dateConfirmed = '';
		this.city = city;
		this.type = type;
	}

	checkPrice() {
		return this.price >= 1000;
	}

	confirmOrder() {
		this.isConfirmed = true;
		this.dateConfirmed = new Date();
	}

	isValidType() {
		if (this.type === 'Buy' || this.type === 'Sell') {
			return true;
		}
		return false;
	}
}
