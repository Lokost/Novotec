titulo = document.getElementById("titulo")
desc = document.getElementById("desc")


// Leitura da URL
var result = {}
var queryString = location.search.slice(1) 
var re = /([^&=]+)=([^&]*)/g 
var m

// Obtenção do nome e valor
while (m = re.exec(queryString)) {
    result[decodeURIComponent(m[1])] = decodeURIComponent(m[2])
}

//Inserindo na página
titulo.innerHTML = result.titulo
desc.innerHTML = result.desc
