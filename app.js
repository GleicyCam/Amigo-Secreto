let amigos = []; // Array para armazenar os nomes dos amigos
let sorteios = []; // Array para armazenar os sorteios realizados

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
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Nenhum amigo disponível para sortear."); // Verifica se há amigos na lista
    }
    
    else if (sorteios.length === amigos.length) {
        alert("Todos os amigos já foram sorteados!"); // Alerta que todos foram sorteados
    }
    else {
    // Sorteia um amigo aleatório
    const indiceSorteado = Math.floor(Math.random() * amigos.length); 
    const amigoSorteado = amigos[indiceSorteado]; 

    // Adiciona ao array de sorteios com a ordem
    sorteios.push(amigoSorteado);

    // Exibe o sorteio
    const resultado = document.getElementById("resultado");

    // Exibe a ordem do sorteio com nome correspondente
    const ordem = sorteios.length;
    resultado.innerHTML = `<p>O ${ordem} sorteado é: <strong>${amigoSorteado}</strong></p>`;
    }
}
