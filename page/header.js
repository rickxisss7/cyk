 const menuItems = document.querySelectorAll('.menu-header h1');

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      // remove a classe active de todos
      menuItems.forEach(h1 => h1.classList.remove('active'));
      // adiciona no clicado
      item.classList.add('active');
    });
  });