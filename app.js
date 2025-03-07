let amigos = []; // Array para armazenar os nomes dos amigos

function adicionarAmigo() {
    const input = document.getElementById("amigo"); // Obtém o campo de entrada
    const nome = input.value; // Obtém o nome e remove espaços extras
    
    if (nome === "") {
        alert("Por favor, insira um nome."); // Alerta se o campo estiver vazio
    } 
    else if (amigos.includes(nome)) {
        alert(`O nome ${nome} já foi adicionado!`); // Alerta se o nome já estiver na lista
    } 
    else { 
        amigos.push(nome); // Adiciona o nome ao array
        atualizarLista("#listaAmigos", nome); // Atualiza a exibição da lista de amigos
        input.value = ""; // Limpa o campo de entrada
    }
}

function atualizarLista(tag, texto) {
    const lista = document.querySelector(tag);
    const item = document.createElement('li');
    item.textContent = texto;
    lista.appendChild(item);
}