let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
const lista = document.getElementById('lista-carrinho');

function atualizarCarrinho() {
    lista.innerHTML = '';
    if (carrinho.length === 0) {
        lista.innerHTML = '<li>Seu carrinho está vazio.</li>';
        return;
    }
    carrinho.forEach((jogo, index) => {
        const li = document.createElement('li');
        li.textContent = jogo;

        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.onclick = function () {
            removerDoCarrinho(index);
        };

        li.appendChild(btnRemover);
        lista.appendChild(li);
    });
}

function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarCarrinho();
}

atualizarCarrinho();


//   part2 teste



function atualizarCarrinho() {
    lista.innerHTML = '';
    if (carrinho.length === 0) {
        lista.innerHTML = '<li>Seu carrinho está vazio.</li>';
        return;
    }
    carrinho.forEach((jogo, index) => {
        const li = document.createElement('li');
        li.style.display = 'flex';
        li.style.alignItems = 'center';
        li.style.gap = '10px';

        const img = document.createElement('img');
        img.src = jogo.imagem;
        img.alt = jogo.nome;
        img.style.width = '50px';
        img.style.height = '50px';
        img.style.objectFit = 'cover';

        const span = document.createElement('span');
        span.textContent = jogo.nome;

        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.onclick = function () {
            removerDoCarrinho(index);
        };

        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(btnRemover);
        lista.appendChild(li);
    });
}


// tt



