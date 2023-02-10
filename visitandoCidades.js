//Exercitando estrutura de repetição

const nome = prompt("Informe o seu nome:")
let resp = prompt("Já visitou alguma cidade? (SIM/NÃO)")
let cidades = ""
let qtd = 0

while (resp === 'Sim') {
    let cidade = prompt("Qual é o nome da cidade visitada?")
    cidades += " - " + cidade + "\n"
    qtd += 1
    resp = prompt("Já visitou alguma outra cidade? (Sim/Não)")
}

alert(nome + " visitou " + qtd + " de cidades!\n\n" +
    "São elas:\n" + cidades)

