let form = document.forms.my;

function checkEmail(email) {
    var reg = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    return email != "" && reg.test(email);
}

function IsntNull(str) {
    return str !== '';
}

function showMessage(type, text) {
    Swal.fire({
        text: text,
        icon: type,
        showConfirmButton: false
    });
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

	let formData = new FormData(form);
	for (var value of formData.values()) {
		console.log(value); 
	}

    if (!checkEmail(formData.get('email'))) return showMessage('error', 'Некорректный Email');
    if (!IsntNull(formData.get('password'))) return showMessage('error', 'Введите пароль');
    if (!IsntNull(formData.get('specialty'))) return showMessage('error', 'Введите специальность');

    showMessage('success', 'Пользователь зарегестрирован');
});







