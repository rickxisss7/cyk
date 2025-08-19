// TRAILER 
const gamesNewElements = document.querySelectorAll('.games-new');

gamesNewElements.forEach(gamesNew => {
  const trailer = gamesNew.querySelector('.trailer');

  gamesNew.addEventListener('mouseenter', () => {
    trailer.style.display = 'block';
    trailer.play();
  });

  gamesNew.addEventListener('mouseleave', () => {
    trailer.pause();
    trailer.currentTime = 0;
    trailer.style.display = 'none';
  });
});

// CARROSEL DE IMAGENS

const jogos = [
  {
    img: 'imagens-games/god-of-war-ragnarock.jpg',
    titulo: 'God Of War Ragnarock',
    descricao: 'A continuação da saga nórdica de Kratos e Atreus, trazendo batalhas brutais, deuses implacáveis e uma história emocional sobre paternidade, destino e o fim dos tempos.',
    preco: 'R$ 309,90',
    preco2: 'R$ 280,00',
    link: 'god-of-war-ragnarock.html'
  },
  {
    img: 'imagens-games/elden-ring2.avif',
    titulo: 'Elden Ring',
    descricao: 'Um vasto RPG de ação em mundo aberto, onde o jogador explora as Terras Intermédias enfrentando chefes desafiadores, segredos escondidos e uma narrativa sombria criada em colaboração com George R. R. Martin.',
    preco: 'R$ 289,90',
    preco2: 'R$ 240,00',
    link: ''
  },
  {
    img: 'imagens-games/uncharted2.avif',
    titulo: 'Uncharted 4',
    descricao: 'Uma aventura cinematográfica que acompanha Nathan Drake em sua última jornada, misturando exploração, escaladas perigosas, quebra‑cabeças e tiroteios em cenários exuberantes ao redor do mundo.',
    preco: 'R$ 299,90',
    preco2: 'R$ 256,00',
    link: 'god-of-war-ragnarock.html'
  },

  {
    img: 'imagens-games/stalker2.jpeg',
    titulo: 'S.T.A.L.K.E.R. 2',
    descricao: 'Um jogo de tiro em primeira pessoa com elementos de sobrevivência e terror, ambientado na Zona de Exclusão de Chernobyl. Você explora um mundo aberto hostil, cheio de anomalias, mutantes e facções rivais, enquanto busca artefatos valiosos e desvenda mistérios sombrios em meio a uma atmosfera densa e perigosa.',
    preco: 'R$ 300,00',
    preco2: 'R$ 280,00',
    link: ''
  },
  {
    img: 'imagens-games/thewitcher3.jpeg',
    titulo: 'The Witcher',
    descricao: 'Um épico de fantasia onde você vive como Geralt de Rívia, um caçador de monstros em busca de sua filha adotiva, atravessando um mundo aberto cheio de escolhas morais, intrigas políticas e combates intensos.',
    preco: 'R$ 279,90',
    preco2: 'R$ 240,00',
    link: ''
  }

];

  jogos.forEach(img => {
  const i = new Image();
  i.src = img.src;
});

// test

let carregadas = 0;
jogos.forEach(img => {
  const i = new Image();
  i.src = img.src;
  i.onload = () => {
    carregadas++;
    if (carregadas === imagens.length) {
      iniciarCarrossel();
    }
  }
});

function iniciarCarrossel() {
  let index = 0;
  setInterval(() => {
    document.getElementById("slide-img").src = imagens[index].src;
    document.getElementById("").innerText = imagens[index].titulo;
    index = (index + 1) % imagens.length;
  }, 3000);
}




let indiceAtual = 0;

// pega elementos
const slideImg = document.getElementById('slide-img');
const gameTitle = document.getElementById('game-title');
const gameDesc = document.getElementById('game-desc');
const gamePrice = document.getElementById('game-price');
const gamePrice2 = document.getElementById('game-price2');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const slideLink = document.getElementById('slide-link');
 const infoLink = document.getElementById('info-link');


// função pra atualizar
function mostrarJogo(index) {
  const jogo = jogos[index];
  slideImg.src = jogo.img;
  gameTitle.textContent = jogo.titulo;
  gameDesc.textContent = jogo.descricao;
  gamePrice.textContent = jogo.preco;
  gamePrice2.textContent = jogo.preco2;
  slideLink.href = jogo.link;
   infoLink.href = jogo.link;
}



// funções de navegação
function proximo() {
  indiceAtual++;
  if (indiceAtual >= jogos.length) indiceAtual = 0;
  mostrarJogo(indiceAtual);
}

function anterior() {
  indiceAtual--;
  if (indiceAtual < 0) indiceAtual = jogos.length - 1;
  mostrarJogo(indiceAtual);
}

// eventos
next.addEventListener('click', () => {
  proximo();
  reiniciarAutoPlay();
});

prev.addEventListener('click', () => {
  anterior();
  reiniciarAutoPlay();
});

// autoplay
let intervalo = setInterval(proximo, 6000);

function reiniciarAutoPlay() {
  clearInterval(intervalo);
  intervalo = setInterval(proximo, 6000);
}

next.addEventListener('click', reiniciarAutoPlay);
prev.addEventListener('click', reiniciarAutoPlay);

// 👉 MUITO IMPORTANTE: mostrar o primeiro jogo logo no início
mostrarJogo(indiceAtual);


// BIBLIOTECA GAMES

  // Carrega carrinho existente
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

  function adicionarAoCarrinho(jogo) {
    carrinho.push(jogo);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert(jogo + " adicionado ao carrinho!");
  }

  // Quando clicar em "Meu Carrinho", vai para carrinho.html
  document.getElementById('menu-carrinho').addEventListener('click', function() {
    window.location.href = 'carrinho.html';
  });



// novo

function adicionarAoCarrinho(jogo) {
  // Verifica se o jogo já está no carrinho
  if (carrinho.includes(jogo)) {
    const msg = document.getElementById('mensagem');
    msg.textContent = jogo + " já está no carrinho!";
    msg.style.display = 'block';

    setTimeout(() => {
      msg.style.display = 'none';
    }, 2000);
    return; // sai da função para não adicionar duplicado
  }

  // Se não estiver, adiciona normalmente
  carrinho.push(jogo);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));

  const msg = document.getElementById('mensagem');
  msg.textContent = jogo + " foi adicionado ao carrinho!";
  msg.style.display = 'block';

  setTimeout(() => {
    msg.style.display = 'none';
  }, 2000);
}


// loja


