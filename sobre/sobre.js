'use strict'

const chk = document.getElementById('chk');
const theme = document.querySelector('#theme-link');

if (localStorage.getItem('tema') == 'escuro') {
    theme.href = "sobre-dark-theme.css";
    localStorage.setItem('tema', 'escuro');
} else {
    theme.href = "sobre-light-theme.css";
    localStorage.setItem('tema', 'claro');
}

chk.addEventListener('change', () => {
	if (theme.getAttribute("href") == "sobre-light-theme.css") {
		theme.href = "sobre-dark-theme.css";
		localStorage.setItem('tema', 'escuro');
	} else {
		theme.href = "sobre-light-theme.css";
		localStorage.setItem('tema', 'claro');
	}
});
