const singleBtn = document.querySelector('.single-use-btn');

const singleClickLog = () => {
	console.log('clicked');
	singleBtn.removeEventListener('click', singleClickLog);
};

singleBtn.addEventListener('click', singleClickLog);
