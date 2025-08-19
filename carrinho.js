// function adicionarAoCarrinho(nome, preco, imagem) {
//     let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
//     carrinho.push({ nome, preco, imagem });
//     localStorage.setItem("carrinho", JSON.stringify(carrinho));
//     window.location.href = "carrinho.html"; // Vai para página do carrinho
// }


function addByName(nomeJogo) {
    const jogo = games.find(g => g.name === nomeJogo);
    if (!jogo) {
        alert("Jogo não encontrado!");
        return;
    }


    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
        // Verifica se o jogo já está no carrinho
    const existe = carrinho.some(item => item.name === jogo.name);
    if (existe) {
        alert("Esse jogo já está no carrinho!");
        window.location.href = "carrinho.html"; // vai mesmo assim
        return;
    }

    carrinho.push({
        name: jogo.name,
        url: jogo.url,
        img: jogo.img
    });

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    // Vai para a página do carrinho
    window.location.href = "carrinho.html";
}

function finalizarCompra() {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    if(carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    // Você pode salvar os dados no localStorage ou enviar via query string
    // Exemplo: salvar no localStorage e ir para a página pagamento.html
    localStorage.setItem("carrinhoParaPagamento", JSON.stringify(carrinho));

    window.location.href = "pagamento.html";
}
