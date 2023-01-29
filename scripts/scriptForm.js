const submit = document.getElementById('submit');
const form = document.getElementById('formToHide');
const thanks = document.getElementById('sayThanks');

submit.onclick = function () {
    form.style.display = 'none';
    thanks.innerHTML = '<h1>Thank you for your message!</h1>'
}