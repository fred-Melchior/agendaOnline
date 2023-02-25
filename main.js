const form = document.getElementById('formAgenda')
const nome = []
const telefone = []

let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault()

    cadastroContato()
    atualizaAgenda()
})

function cadastroContato(){
    const inputNome = document.getElementById('inputNome')
    const inputTelefone = document.getElementById('inputTelefone')

    nome.push(inputNome.value)
    telefone.push(inputTelefone.value)

    let linha = `<tr>`
    linha += `<td>${inputNome.value}</td>`
    linha += `<td>${inputTelefone.value}</td>`
    linha += `</tr>`

    linhas += linha

    inputNome.value = ''
    inputTelefone.value = ''
}

function atualizaAgenda(){
    const corpoAgenda = document.querySelector('tbody')
    corpoAgenda.innerHTML = linhas
}