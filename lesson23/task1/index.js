// так можно получить данные формы - ВАРИАНТ 1:
// eslint-disable-next-line no-undefconst
const submitButton = document.querySelector('.submit-button');
const formElem = document.querySelector('.login-form');
const emailForm = document.getElementById('email');
const passwordForm = document.getElementById('password');

console.log(passwordForm);

function validation(event) {
	if (event.target.type === 'email') {
		const error = document.querySelector('.error-text_email');

		if (!event.target.value) {
			error.textContent = 'Required';
		} else if (!event.target.value.includes('@')) {
			error.textContent = 'Should be an email';
		} else if (event.target.value.includes('@')) {
			error.textContent = '';
		}
	} else if (event.target.type === 'password') {
		const error = document.querySelector('.error-text_password');
		if (!event.target.value) {
			error.textContent = 'Required';
		}
	}
}

emailForm.addEventListener('input', validation);
passwordForm.addEventListener('input', validation);

function handleSubmit() {
	const formFields = [...new FormData(formElem)];
	// formFields => [["email", "значение поля email"], ["password", "значение поля password"]]

	const formData = formFields.reduce(function (acc, formField) {
		const prop = formField[0]; // здесь "name" инпута
		const value = formField[1]; // здесь "value" инпута
		// если использовать деструктуризацию, то можно предыдущие 2 строки записать короче
		// const [prop, value] = formField;
		return {
			// используем оператор расширения, чтобы в acc добвить свойства все предыдущих итераций
			...acc,
			// используем вычислимое свойство объекта, чтобы добавить в аккумулятор новое свойство
			[prop]: value,
		};
	}, {});

	alert(JSON.stringify(formData));
}

submitButton.addEventListener('click', handleSubmit);

// const formFields = [...new FormData(formElem)];
// // formFields => [["email", "значение поля email"], ["password", "значение поля password"]]

// const formData = formFields.reduce(function (acc, formField) {
// 	const prop = formField[0]; // здесь "name" инпута
// 	const value = formField[1]; // здесь "value" инпута
// 	// если использовать деструктуризацию, то можно предыдущие 2 строки записать короче
// 	// const [prop, value] = formField;
// 	return {
// 		// используем оператор расширения, чтобы в acc добвить свойства все предыдущих итераций
// 		...acc,
// 		// используем вычислимое свойство объекта, чтобы добавить в аккумулятор новое свойство
// 		[prop]: value,
// 	};
// }, {});

// более простой формат считывания формы - ВАРИАНТ 2:
// const formData = Object.fromEntries(new FormData(formElem));
