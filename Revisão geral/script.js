// altere o nome do formulário no HTML e aqui.
form = document.forms["regItem"] // <==

resultados = document.getElementsByClassName("resultado")[0]
toTop = document.getElementById("toTop")

class Item {
    titulo
    desc
    
    constructor(titulo, desc) {
        this.titulo = titulo
        this.desc = desc
    }
    
    build() {
        return `
        <div id="item">
        <h3>${this.titulo}</h3>
        <p>${this.desc}</p>
        </div>
        `
    }
}

lista = [new Item("teste", "teste")]
recarregarlista()

document.addEventListener("scroll", (e) => {
    scroll = this.scrollY

    if (scroll > 30) {
        toTop.style.display = "flex"
    } else {
        toTop.style.display = "none"
    }
})

toTop.addEventListener("click", () => {
    this.scrollTo(0, 0)
})

form.addEventListener("submit", function(e) {
    e.preventDefault()

    let titulo = form["titulo"].value
    let desc = form["desc"].value

    if (titulo == "" || desc == "")  {
        alert("Faltam informações!")
        return
    }

    adicionar(titulo, desc)
})

function adicionar(titulo, desc) {
    lista.push(new Item(titulo, desc))
    recarregarlista()
}

function recarregarlista() {
    content = ""
    for (i in lista) {
        content += lista[i].build()
    }
    resultados.innerHTML = content
}