const inputvalue = document.querySelector('.text-input');

const inputValueLog = event => {
	console.log(event.target.value);
};

inputvalue.addEventListener('change', inputValueLog);
