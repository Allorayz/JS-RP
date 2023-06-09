const splitText = (text, len) => {
	const strArr = [];
	let startPosition = 0;

	if (text === !String) {
		return null;
	}

	while (true) {
		const chunk = text.substr(startPosition, len);
		if (chunk.length === 0) {
			break;
		}
		if (len === undefined) {
			strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
			startPosition += 10;
		} else {
			strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
			startPosition += len;
		}
	}
	return strArr.join('\n');
};
