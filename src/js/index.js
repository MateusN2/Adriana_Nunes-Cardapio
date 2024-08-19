const botoes = document.querySelectorAll('.botao');

const produto = document.querySelectorAll(".produto");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desselecionarBotao();
        desselecionarProduto();

        botao.classList.add("selecionado");

        produto[indice].classList.add("selecionado");

    });
});

function desselecionarProduto() {
    const produtoSelecionado = document.querySelector(".produto.selecionado");
    produtoSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

