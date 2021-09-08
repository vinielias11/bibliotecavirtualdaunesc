'use strict'

const chk = document.getElementById('chk');
const theme = document.querySelector('#theme-link');
const theme2 = document.querySelector('#theme-link2');

if (localStorage.getItem('tema') == 'claro') {
    theme.href = "light-theme.css";
	theme2.href = "pesquisa/caixaDePesquisa-light.css"
    localStorage.setItem('tema', 'claro');
} else {
    theme.href = "dark-theme.css";
	theme2.href = "pesquisa/caixaDePesquisa-dark.css"
    localStorage.setItem('tema', 'escuro');
}

chk.addEventListener('change', () => {
	if (theme.getAttribute("href") == "light-theme.css") {
		theme.href = "dark-theme.css"
		theme2.href = "pesquisa/caixaDePesquisa-dark.css"
		localStorage.setItem('tema', 'escuro');
	} else {
		theme.href = "light-theme.css"
		theme2.href = "pesquisa/caixaDePesquisa-light.css"
		localStorage.setItem('tema', 'claro');
	}
});

