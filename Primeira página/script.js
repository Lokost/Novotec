// // Linkagem dos objetos do HTML (DOM)
// const inicio = document.getElementById("home")
// const sobre = document.getElementById("about")

// // Adicionando a função aos botões
// inicio.addEventListener("click", () => goto("home"))
// sobre.addEventListener("click", () => goto("sobre"))


// // Função para a troca de páginas
// function goto(page) {
//     switch (page) {
//         case "home": open("./index.html", "_self"); break;
//         case "sobre": open("./sobre.html", "_self"); break;
//         default: open("./erro.html", "_self"); break;
//     }
// }

const letters = "abcdefghijklmnopqrstuvwxyz"
const rand = Math.random
const floor = Math.floor

function updateRow(content, value, maxValue) {
    // if (value < maxValue) {
    //     process.stdout.clearLine(0);
    //     process.stdout.cursorTo(0);
    //     process.stdout.write(content);
    // } else {
    //     process.stdout.write(content)
    // }
    console.log(content)
}

function keyGen(size) {
    let code = ""

    for (let i = 0; i < size; i++) {
        if (floor(rand() * 2)) {
            code += letters[floor(rand() * letters.length)]
        } else {
            code += floor(rand() * 10).toString()
        }
    }

    return code;
}

function randomKeys(amount, size) {
    codes = []
    for (let i = 0; i < amount; i++) {
        updateRow(`Criando chave ${i + 1}/${amount}`, i+1, amount)
        codes.push(keyGen(size))
    }
    return codes
}

function uniqueKeys(amount, size) {
    codes = []
    do {
        updateRow(`Criando chave ${codes.length + 1}/${amount}`, codes.length, amount)
        code = keyGen(size)
        if (!codes.includes(code)) {
            codes.push(code)
        }
    } while (codes.length <= amount)

    return codes
}

carro = {
    modelo: "uno",
    ano: 2023,
    marca: "fiat",
    andando: false,
    pararAndar: function () { this.andando = !this.andando }
}

// class carro {
//     modelo;
//     ano;
//     marca;
//     andando;

//     constructor (modelo, ano, marca) {
//         this.modelo = modelo
//         this.ano = ano
//         this.marca = marca
//         this.andando = false
//     }

//     pararAndar() {
//         this.andando = !this.andando
//     }
// }

c1 = new carro(modelo = "uno", ano = 2023, marca = "fiat")
c2 = new carro(modelo = "gol", ano = 2022, marca = "volkswagen")
c3 = new carro(modelo = "palio", ano = 2023, marca = "fiat")

// puxando da estática:
carro.modelo // "uno"

// puxando da replicada (classe)
c1.marca // "fiat"

carro.pararAndar()
console.log(carro.andando)

c1.pararAndar()
console.log(c1.andando)

class Animal {
    andando = false
    deitado = false
    nome

    constructor (nome) {
        this.nome = nome
    }

    andar() { this.andando = true }
    parar() { this.andando = false }
    deitar() { this.deitado = true }
    levantar() { this.deitado = false }
}

class Gato extends Animal {
    seLambendo = false

    seLamber() { this.seLambendo = !this.seLambendo }
}

class Cachorro extends Animal {
    comOsso = false

    pegar() { this.comOsso = true }
}

class Papagaio extends Animal {
    falando = false

    falar() { this.falando = true }
}