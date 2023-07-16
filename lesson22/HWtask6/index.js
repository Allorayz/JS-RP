const buttton = document.querySelectorAll('.btn');

const handleClick = event => {
	console.log(event.target.textContent);
};

buttton[0].addEventListener('click', handleClick);
buttton[1].addEventListener('click', handleClick);
