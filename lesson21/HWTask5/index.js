export function setButton(text) {
	const body = document.querySelector('body');
	body.innerHTML = `<button>${text}</button>`;
}

setButton('button text');
