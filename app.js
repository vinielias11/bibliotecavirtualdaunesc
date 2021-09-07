'use strict'

const chk = document.getElementById('chk');
const theme = document.querySelector('#theme-link');
chk.addEventListener('change', () => {
	if (theme.getAttribute("href") == "light-theme.css") {
		theme.href = "dark-theme.css"
	} else {
		theme.href = "light-theme.css"
	}
});
