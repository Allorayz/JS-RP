export function finishList() {
	const firstItem = document.createElement('li');
	firstItem.textContent = '1';
	document.querySelector('.list').prepend(firstItem);

	const fourthItem = document.createElement('li');
	fourthItem.textContent = '4';
	document.querySelector('.special').before(fourthItem);

	const sixthItem = document.createElement('li');
	sixthItem.textContent = '6';
	document.querySelector('.special').after(sixthItem);

	const eightItem = document.createElement('li');
	eightItem.textContent = '8';
	document.querySelector('.list').append(eightItem);
}
