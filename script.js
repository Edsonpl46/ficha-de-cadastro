var lista = [];

function carregarDados() {
    var dados = localStorage.getItem("cadastro");
    if (dados) {
        lista = JSON.parse(dados);
        exibirLista();
    }
}

function adicionar() {
    var nome = document.getElementById("nome").value;
    var data = new Date().toLocaleDateString(); // Obtém a data atual

    if (nome && data) {
        var nomeFormatado = nome.toLowerCase();
        if (verificarCadastroExistente(nomeFormatado)) {
            alert("O nome já foi cadastrado anteriormente.");
        } else {
            var cadastro = {
                nome: nome,
                data: data
            };

            lista.push(cadastro);
            salvarDados();
            exibirLista();
            limparCampos();
        }
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

function verificarCadastroExistente(nome) {
    for (var i = 0; i < lista.length; i++) {
        if (lista[i].nome.toLowerCase() === nome.toLowerCase()) {
            return true;
        }
    }
    return false;
}

function exibirLista() {
    var ul = document.getElementById("lista");
    ul.innerHTML = "";

    for (var i = 0; i < lista.length; i++) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(lista[i].nome));

        ul.appendChild(li);
    }
}

function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("data").value = "";
}

function salvarDados() {
    localStorage.setItem("cadastro", JSON.stringify(lista));
}

carregarDados();
