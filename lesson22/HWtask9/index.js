const btnElem = document.querySelectorAll('.pagination__page');
const handleClick = event => {
	console.log(event.target.getAttribute('data-page-number'));
};

btnElem.forEach(elem => elem.addEventListener('click', handleClick));
