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

function bookSearch () {
    var search = document.getElementById('pGeral').value;

    if (search == '') {
        $("#results").empty();
    }

    $("#results").innerHTML = "";
    console.log(search)

    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=" + search + "&maxResults=40",
        dataType: "json",

        success: function (data) {
            for (i = 0; i < data.items.length; i++) {
                results.innerHTML += "<h2>" + data.items[i].volumeInfo.title + "</h2>"
            }
        },

        type: 'GET'
    })
}

$("#buscaGeral").on('click', function() {
    bookSearch();
});

