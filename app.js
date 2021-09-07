'use strict'

const chk = document.getElementById('chk');
chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
	document.getElementsByClassName("header").setAttribute("header", "headerdark");
});
