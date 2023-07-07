export function createButton(buttonText) {
	const body = document.querySelector('body');
	const createBut = document.createElement('button');
	createBut.textContent = buttonText;
	body.append(createBut);
}

createButton('Send Email');
