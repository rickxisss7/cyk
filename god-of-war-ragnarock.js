  const imagemPrincipal = document.getElementById('imagem-principal');
   const miniaturas = document.querySelectorAll('.miniaturas img');
   

  miniaturas.forEach(mini => {
    mini.addEventListener('click', () => {
      // troca imagem principal
      imagemPrincipal.style.opacity = 0; // animação de saída
      setTimeout(() => {
        imagemPrincipal.src = mini.src;
        imagemPrincipal.style.opacity = 1;
      }, 200);

      // destaca miniatura selecionada
      miniaturas.forEach(m => m.classList.remove('selecionada'));
      mini.classList.add('selecionada');
    });
  });

    


  miniaturas.forEach(mini => {
    mini.addEventListener('click', () => {
      // Limpa seleção das miniaturas
      miniaturas.forEach(m => m.classList.remove('selecionada'));
      mini.classList.add('selecionada');

      // Remove o conteúdo atual da área principal
      areaPrincipal.innerHTML = '';

      // Verifica o tipo da miniatura
      const tipo = mini.getAttribute('data-type');
      const src = mini.getAttribute('data-src');

      if (tipo === 'img') {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Imagem principal';
        img.style.opacity = 0;
        areaPrincipal.appendChild(img);
        // efeito fade
        setTimeout(() => img.style.opacity = 1, 50);
      } else if (tipo === 'video') {
        const video = document.createElement('video');
        video.src = src;
        video.controls = true;
        video.autoplay = true;
        video.style.opacity = 0;
        areaPrincipal.appendChild(video);
        setTimeout(() => video.style.opacity = 1, 50);
      }
    });
  });


   const area = document.getElementById('area-principal');

  miniaturas.forEach(mini => {
    mini.addEventListener('click', () => {
      // remove destaque
      miniaturas.forEach(m => m.classList.remove('selecionada'));
      mini.classList.add('selecionada');

      // limpa a área principal
      area.innerHTML = '';

      const tipo = mini.dataset.type;
      const src = mini.dataset.src;

      if (tipo === 'img') {
        const img = document.createElement('img');
        img.src = src;
        area.appendChild(img);
      } else if (tipo === 'video') {
        const video = document.createElement('video');
        video.src = src;
        video.controls = true;
        video.autoplay = true;
        area.appendChild(video);
      }
    });
  });