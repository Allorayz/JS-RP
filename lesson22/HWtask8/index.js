const checkBoxElem = document.querySelector('.task-status');

const checkStatusLog = event => {
	console.log(event.target.checked);
};

checkBoxElem.addEventListener('change', checkStatusLog);
