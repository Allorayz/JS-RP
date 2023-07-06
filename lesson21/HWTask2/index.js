export function getItemList() {
	const listItems = document.querySelectorAll('.technology');
	console.dir(listItems);
	return listItems;
}

export function getItemsArray() {
	const arrayElems = Array.from(document.querySelectorAll('.tool'));
	console.dir(arrayElems);
	return arrayElems;
}

getItemList();
getItemsArray();
