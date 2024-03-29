const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const eventListElem = document.querySelector('.events-list');
const clearButton = document.querySelector('.clear-btn');
const removeHandlers = document.querySelector('.remove-handlers-btn');
const attachButton = document.querySelector('.attach-handlers-btn');

const logTarget = (text, color) => {
	const eventListElem = document.querySelector('.events-list');
	eventListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
};

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

function attacher() {
	divElem.addEventListener('click', logGreyDiv, true);
	divElem.addEventListener('click', logGreenDiv);

	pElem.addEventListener('click', logGreyP, true);
	pElem.addEventListener('click', logGreenP);

	spanElem.addEventListener('click', logGreySpan, true);
	spanElem.addEventListener('click', logGreenSpan);
}

function remover() {
	divElem.removeEventListener('click', logGreyDiv, true);
	divElem.removeEventListener('click', logGreenDiv);

	pElem.removeEventListener('click', logGreyP, true);
	pElem.removeEventListener('click', logGreenP);

	spanElem.removeEventListener('click', logGreySpan, true);
	spanElem.removeEventListener('click', logGreenSpan);
}

const clearList = () => {
	eventListElem.innerHTML = '';
};

clearButton.addEventListener('click', clearList);
attachButton.addEventListener('click', attacher);
removeHandlers.addEventListener('click', remover);

attacher();
