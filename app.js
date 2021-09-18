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
    var item, numero, titulo, autor, publisher, bookLink, bookImg; 
    var placeholder = '<img src="https://via.placeholder.com/150">';
    var search = document.getElementById('pGeral').value;

    if (search == '') {
        $("#results").empty();
        desabilitaResultados();
        alert ('Digite algo para pesquisar!')
    }

    $("#results").innerHTML = "";
    console.log(search)

    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=" + search + "&maxResults=40",
        dataType: "json",

        success: function (data) {
            for (var i = 0; i < data.items.length; i++) {
                // results.innerHTML += "<h2>" + data.items[i].volumeInfo.title + "</h2>"
                item = data.items[i];
                titulo = item.volumeInfo.title;
                autor = item.volumeInfo.authors;
                publisher = item.volumeInfo.authors.publisher;
                bookLink = item.volumeInfo.previewLink;
                bookImg = (item.volumeInfo.imageLinks) ? item.volumeInfo.imageLinks.thumbnail : placeholder;
                numero = (item.volumeInfo.industryIdentifiers[1].identifier) ? item.volumeInfo.industryIdentifiers[1].identifier : 'não encontrado' ;
                results.innerHTML += '<div class="row mt-4">' + formatOutput(bookImg, titulo, autor, publisher, bookLink, numero)
                                     '</div>';
            }
        },
        
        type: 'GET'
    })
}

function formatOutput (bookImg, titulo, autor, publisher, bookLink, numero) {
    var viewUrl = 'livro.html?isbn='+numero; //constructing link for bookviewer
    var htmlCard = `<div class="col-lg-6">
      <div class="card" style="">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="${bookImg}" class="card-img" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${titulo}</h5>
              <p class="card-text">Autor: ${autor}</p>
              <p class="card-text">Publisher: ${publisher}</p>
              <a target="_blank" href="${viewUrl}" class="btn btn-secondary">Ler o livro</a>
            </div>
          </div>
        </div>
      </div>
    </div>`
    return htmlCard;
}


function habilitaResultados () {
    var caixa = document.getElementById('pesquisaResultados');
    caixa.style.visibility = 'visible';
}

function desabilitaResultados () {
    var caixa = document.getElementById('pesquisaResultados');
    caixa.style.visibility = 'hidden';
}

$("#buscaGeral").on('click', function() {
    habilitaResultados();
    bookSearch();
});

