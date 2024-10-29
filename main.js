const form = document.getElementById('form-agenda');
const nomes = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeNomes = document.getElementById('nome');
    const inputNumeroNumeros = document.getElementById('numero');

    if (nomes.includes(inputNomeNomes.value)) {
        alert(`O contato: ${inputNomeNomes.value} já foi inserido!`);
    }else{

        nomes.push(inputNomeNomes.value);
        numeros.push(parseFloat(inputNumeroNumeros.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeNomes.value}</td>`;
        linha += `<td>${inputNumeroNumeros.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }
        // Limpar os campos após adicionar
        inputNomeNomes.value = "";
        inputNumeroNumeros.value = "";
    
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
