export function finishForm() {
	const setLogin = document.querySelector('input');
	setLogin.setAttribute('name', 'login');

	const newInput = document.createElement('input');
	const setNewInput = document.querySelector('.login-form');
	setNewInput.append(newInput);
	newInput.setAttribute('type', 'password');
}
