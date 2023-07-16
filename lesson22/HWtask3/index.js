const checkBoxElem = document.querySelector('.task-status');

const checkBoxCheck = event => console.log(event.target.checked ? true : false);
checkBoxElem.addEventListener('change', checkBoxCheck);
