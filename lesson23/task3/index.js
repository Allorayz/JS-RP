const tasks = [
	{ id: '1', text: 'Buy milk', done: false },
	{ id: '2', text: 'Pick up Tom from airport', done: false },
	{ id: '3', text: 'Visit party', done: false },
	{ id: '4', text: 'Visit doctor', done: true },
	{ id: '5', text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
	listElem.innerHTML = '';
	const tasksElems = tasksList
		.sort((a, b) => a.done - b.done)
		.map(({ id, text, done }) => {
			const listItemElem = document.createElement('li');
			listItemElem.classList.add('list__item');
			const checkbox = document.createElement('input');
			checkbox.setAttribute('type', 'checkbox');
			checkbox.setAttribute('data-id', id);
			checkbox.checked = done;
			checkbox.classList.add('list__item-checkbox');
			checkbox.addEventListener('input', updateTask);
			if (done) {
				listItemElem.classList.add('list__item_done');
			}
			listItemElem.append(checkbox, text);

			return listItemElem;
		});

	listElem.append(...tasksElems);
};

renderTasks(tasks);

// put your code here
const inputElement = document.querySelector('.task-input');
const createButton = document.querySelector('.create-task-btn');

function createTask() {
	const value = inputElement.value;

	if (value === '') {
		return alert('empty');
	}

	const task = {
		text: value,
		done: false,
		id: Math.random(),
	};

	tasks.push(task);

	inputElement.value = '';

	renderTasks(tasks);
}

function updateTask(event) {
	const task = tasks.find(_task => '' + _task.id === event.target.dataset.id);
	task.done = event.target.checked;
	renderTasks(tasks);
}

createButton.addEventListener('click', createTask);
