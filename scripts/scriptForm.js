const submit = document.getElementById('submit');
const form = document.getElementById('formToHide');
const thanks = document.getElementById('sayThanks');
const references = document.getElementById('references');

references.style.display = 'none';
submit.onclick = function () {
    form.style.display = 'none';
    thanks.innerHTML = '<h1>Thank you for your message!</h1>';
    thanks.style.boxSizing = 'border-box';
    thanks.style.padding = '0';
    references.style.display = 'block';
}

const menu = document.getElementsByClassName('menu');

for (let i = 0; i< menu.length; i++) {
    menu[i].addEventListener('touchstart', function () {
        menu[i].style.backgroundColor = 'rgba(210,180,140,1)';
        menu[i].style.borderColor = 'rgba(210,180,140,1)';
    })
    menu[i].addEventListener('touchend', function () {
        menu[i].style.backgroundColor = 'white';
        menu[i].style.borderColor = 'rgba(255, 69, 0, 1)';

    })
}