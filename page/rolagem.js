// CARROSEL - FOR PAGE SUAVE

function mostrarJogo(index) {
  // inicia efeito de saída
  slideImg.style.opacity = 0;
  slideImg.style.transform = "scale(0.95)";

  setTimeout(() => {
    // troca a imagem e os textos
    const jogo = jogos[index];
    slideImg.src = jogo.img;
    gameTitle.textContent = jogo.titulo;
    gameDesc.textContent = jogo.descricao;
    gamePrice.textContent = jogo.preco;

    // inicia efeito de entrada
    slideImg.style.opacity = 1;
    slideImg.style.transform = "scale(1)";
  }, 800); // meio segundo antes de trocar, fica bem suave
}


// setinha main start

  // const container = document.querySelector('.main-start');
   const leftArrow = document.querySelector('.arrow.left');
  const rightArrow = document.querySelector('.arrow.right');

//   // Quantidade que vai rolar por clique (ajuste como quiser)
//   const scrollAmount = 220;

//   leftArrow.addEventListener('click', () => {
//     container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
//   });

//   rightArrow.addEventListener('click', () => {
//     container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
//   });

  const container = document.querySelector('.main-start');
const firstCard = container.querySelector('.game');
const gap = 20; // mesmo valor que você colocou no CSS
const scrollAmount = firstCard.offsetWidth + gap;


rightArrow.addEventListener('click', () => {
  container.scrollBy({ left: scrollAmount, behavior: 'smooth' }); // 🔥 suave
});

leftArrow.addEventListener('click', () => {
  container.scrollBy({ left: -scrollAmount, behavior: 'smooth' }); // 🔥 suave
});

function scrollWithFade(amount) {
  container.style.transition = 'opacity 0.3s ease'; 
  container.style.opacity = '0.5'; // começa a sumir
  container.scrollBy({ left: amount, behavior: 'smooth' });
  setTimeout(() => {
    container.style.opacity = '1'; // volta ao normal
  }, 300); // mesmo tempo do transition
}

// rightArrow.addEventListener('click', () => scrollWithFade(scrollAmount));
// leftArrow.addEventListener('click', () => scrollWithFade(-scrollAmount));


function scrollWithFade(amount) {
  container.classList.add('fade-animation');
  container.scrollBy({ left: amount, behavior: 'smooth' });

  container.addEventListener('animationend', () => {
    container.classList.remove('fade-animation');
  }, { once: true });
}

rightArrow.addEventListener('click', () => scrollWithFade(scrollAmount));
leftArrow.addEventListener('click', () => scrollWithFade(-scrollAmount));


// scroll fixed tel

// window.addEventListener('scroll', function() {
//     const menu = document.getElementById('searchMenu');
//     const headerAltura = 60; // altura do seu header fixo
//     const pontoAtivacao = 150; // a rolagem onde você quer ativar (mude se quiser)

//     if (window.scrollY > pontoAtivacao) {
//       menu.classList.add('fixed');
//     } else {
//       menu.classList.remove('fixed');
//     }
//   });

document.addEventListener('DOMContentLoaded', function() {
  const menu = document.getElementById('searchMenu');
  const pontoAtivacao = menu.offsetTop; // vai fixar quando chegar na posição dele

  window.addEventListener('scroll', function() {
    if (window.scrollY > pontoAtivacao) {
      menu.classList.add('fixed');
    } else {
      menu.classList.remove('fixed');
    }
  });
});