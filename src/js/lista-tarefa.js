import './nav.js'
import '../css/lista-tarefa.css'

const taref = document.querySelector('#input-nova-tarefa')
const adicionar = document.querySelector('#btn-adicionar')
const listaTarefa = document.querySelector("#lista-tarefas")

adicionar.addEventListener('click', function(){
    let descricaoTarefa = taref.value 
    const li = document.createElement('li')
    li.className = 'tarefa'
    li.innerHTML = `
    <disv>${descricaoTarefa}</disv>
    <button class="btn-excluir"></button>`
    listaTarefa.appendChild(li)

});

 