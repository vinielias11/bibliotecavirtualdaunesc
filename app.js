'use strict'

const chk = document.getElementById('chk');
const theme = document.querySelector('#theme-link');

if (localStorage.getItem('tema') == 'claro') {
    theme.href = "light-theme.css";
    localStorage.setItem('tema', 'claro');
} else {
    theme.href = "dark-theme.css";
    localStorage.setItem('tema', 'escuro');
}

chk.addEventListener('change', () => {
	if (theme.getAttribute("href") == "light-theme.css") {
		theme.href = "dark-theme.css"
		localStorage.setItem('tema', 'escuro');
	} else {
		theme.href = "light-theme.css"
		localStorage.setItem('tema', 'claro');
	}
});
