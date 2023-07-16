const inputText = document.querySelector('.text-input');

const inputLog = inputValue => {
	console.log(inputValue.target.value);
};

inputText.addEventListener('change', inputLog);
