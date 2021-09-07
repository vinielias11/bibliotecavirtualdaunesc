'use strict'

const chk = document.getElementById('chk');
const theme = document.querySelector('#theme-link');
chk.addEventListener('change', () => {
	if (theme.getAttribute("href") == "sobre-light-theme.css") {
		theme.href = "sobre-dark-theme.css"
	} else {
		theme.href = "sobre-light-theme.css"
	}
});
