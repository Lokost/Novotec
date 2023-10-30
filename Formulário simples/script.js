form = document.forms["simples"]

form.addEventListener("submit", function(e) {
    e.preventDefault();

    alert(`${form["titulo"].value}\n${form["conteudo"].value}`);
})