 const menuItems = document.querySelectorAll('.menu-header h1');

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      // remove a classe active de todos
      menuItems.forEach(h1 => h1.classList.remove('active'));
      // adiciona no clicado
      item.classList.add('active');
    });
  });


  // outer

  const h1Elements = document.querySelectorAll('.menu-header h1');

// Adiciona eventos de clique para cada um
h1Elements.forEach(h1 => {
    h1.addEventListener('click', () => {
        const texto = h1.textContent.trim(); // pega o texto do h1

        // Decide para onde redirecionar baseado no texto
        if (texto === 'Loja') {
            window.location.href = 'loja.html'; // página interna
        } else if (texto === 'Meu Carrinho') {
            window.location.href = 'biblioteca/book.html'; // página interna
        } else if (texto === 'Suporte') {
            window.location.href = 'https://meusite.com/suporte'; // link externo ou outra página
        }
    });
});