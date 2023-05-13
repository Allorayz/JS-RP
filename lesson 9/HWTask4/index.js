const rooms = {
	room1: [{ name: 'Alex' }, { name: 'Max' }, { name: 'Jonh' }, { name: 'Nastya' }],
	room2: [{ name: 'Leks' }, { name: 'Ban' }],
	room3: [{ name: 'Jack' }, { name: 'Stewie' }, { name: 'Denis' }],
};

const getPeople = obj => {
	return Object.values({ ...obj })
		.flat()
		.map(el => el.name);
};

console.log(getPeople(rooms));
// getPeople(room);
