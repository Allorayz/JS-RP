const arena = document.querySelector('.arena');

function generateRange(from, to) {
	const result = [];
	for (let i = from; i <= to; i += 1) {
		result.push(i);
	}

	return result;
}

const sectors = generateRange(1, 3);
const seats = generateRange(1, 10);
const lines = generateRange(1, 10);

function renderLines() {
	const newLines = lines.map(line => {
		const lineElement = document.createElement('div');
		lineElement.classList.add('sector__line');
		lineElement.setAttribute('data-line-number', line);

		const seatsList = renderSeats();
		lineElement.append(...seatsList);
		return lineElement;
	});

	return newLines;
}

function renderSeats() {
	const newSeats = seats.map(seat => {
		const seatElement = document.createElement('div');
		seatElement.classList.add('sector__seat');
		seatElement.setAttribute('data-seat-number', seat);
		return seatElement;
	});

	return newSeats;
}
function renderSectors() {
	const newSectors = sectors.map(sector => {
		const sectorElement = document.createElement('div');
		sectorElement.classList.add('sector');
		sectorElement.setAttribute('data-sector-number', sector);
		const linesList = renderLines();
		sectorElement.append(...linesList);
		return sectorElement;
	});
	arena.append(...newSectors);
}

const selectedSeat = document.querySelector('.board__selected-seat');

function handleSeatClick(event) {
	const isSeat = event.target.classList.contains('sector__seat');

	console.log(event);

	if (!isSeat) {
		return;
	}

	const seatNumber = event.target.dataset.seatNumber;
	const lineNumber = event.target.closest('.sector__line').dataset.lineNumber;
	const sectorNumber = event.target.closest('.sector').dataset.sectorNumber;

	selectedSeat.textContent = `S ${sectorNumber} - L ${lineNumber} - S ${seatNumber}`;
}

arena.addEventListener('click', handleSeatClick);

renderSectors();
