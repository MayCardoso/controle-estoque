const form = document.getElementById("formProduto");
const tabela = document.getElementById("tabelaProdutos");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const preco = document.getElementById("preco").value;
    const quantidade = document.getElementById("quantidade").value;

    const novaLinha = document.createElement("tr");

    novaLinha.innerHTML = `
        <td>${nome}</td>
        <td>R$ ${parseFloat(preco).toFixed(2)}</td>
        <td>${quantidade}</td>
    `;

    tabela.appendChild(novaLinha);
    form.reset();
});