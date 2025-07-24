// Lista de jogos com URLs de páginas e imagens (use links reais depois)
const games = [
    {
        name: "Resident Evil Village",
        url: "/jogos/resident-evil-village.html",
        img: "imagens-games/resident-evil-village.jpg"
    },
    {
        name: "Spider Man Remastered",
        url: "/jogos/spider-man-remastered.html",
        img: "imagens-games/spiderman-resmatered.jpg"
    },
    {
        name: "Days Gone",
        url: "/jogos/days-gone.html",
        img: "imagens-games/daysgone.jpg"
    },
    {
        name: "Dying Light",
        url: "/jogos/dying-light.html",
        img: "imagens-games/dying-light.jpg"
    },
    {
        name: "Red Dead Redemption 2",
        url: "/jogos/read-dead-2.html",
        img: "imagens-games/red-dead-redemption2.jpg"
    },
    {
        name: "Grand Theft Auto V",
        url: "/jogos/gta-v.html",
        img: "imagens-games/gtav.jpg"
    },
    {
        name: "Spider Man Miles Morales",
        url: "/jogos/spider-man-miles-morales.html",
        img: "imagens-games/spiderman-miles-morales.jpg"
    },
    {
        name: "Resident Evil Biozard",
        url: "/jogos/resident-evil-biozard.html",
        img: "imagens-games/RESIDENT EVIL 7 biohazard Gold Edition.jpg"
    },
    {
        name: "Elden Ring",
        url: "elden-ring/elden.html",
        img: "imagens-games/elden-ring.jpg"
    },
    {
        name: "God of War Ragnarock",
        url: "/jogos/resident-evil-biozard.html",
        img: "imagens-games/god-of-war-ragnarock2.jpg"
    },
    {
        name: "Uncharted",
        url: "/jogos/resident-evil-biozard.html",
        img: "imagens-games/uncharted.jpg"
    },
    {
        name: "The Last of Us Part II Remastered",
        url: "/jogos/resident-evil-biozard.html",
        img: "imagens-games/the-last-of-us-resmatered.jpg"
    },
    {
        name: "Battlefield V",
        url: "/jogos/resident-evil-biozard.html",
        img: "imagens-games/Battlefield V.jpg"
    },
    {
        name: "Forza Horizon 5",
        url: "/jogos/resident-evil-biozard.html",
        img: "imagens-games/forza-horizon5.jpg"
    },
    {
        name: "God of War",
        url: "/jogos/resident-evil-biozard.html",
        img: "imagens-games/god-of-war-4.jpg"
    },
    {
        name: "Mafia III",
        url: "/jogos/resident-evil-biozard.html",
        img: "imagens-games/mafia3.jpg"
    },
    {
        name: "Metro Exodus",
        url: "/jogos/resident-evil-biozard.html",
        img: "imagens-games/Metro Exodus.jpg"
    },
    {
        name: "S.T.A.L.K.E.R. 2",
        url: "/jogos/resident-evil-biozard.html",
        img: "imagens-games/S.T.A.L.K.E.R. 2 Heart of Chornobyl.jpg"
    },
    {
        name: "Dragon Ball Sparking Zero",
        url: "/jogos/resident-evil-biozard.html",
        img: "imagens-games/dragonbal-sparkingzero.jpg"
    },
    {
        name: "Call of Duty Black Ops II",
        url: "/jogos/resident-evil-biozard.html",
        img: "imagens-games/Call of Duty Black Ops 2.jpg"
    },
    {
        name: "Assasin's Creed Odyssey",
        url: "/jogos/resident-evil-biozard.html",
        img: "imagens-games/Assassin's Creed Odyssey.jpg"
    },
    {
        name: "Call of Duty Vanguard",
        url: "/jogos/resident-evil-biozard.html",
        img: "imagens-games/call-of-duty-vanguard.jpg"
    },
    {
        name: "Call of Duty Ghost",
        url: "/jogos/resident-evil-biozard.html",
        img: "imagens-games/Call of Duty GHOSTS.jpg"
    },
    {
        name: "Call of Duty WW2",
        url: "/jogos/resident-evil-biozard.html",
        img: "imagens-games/Call of Duty WW2.jpg"
    },
    {
        name: "Call of Duty Black Ops",
        url: "/jogos/resident-evil-biozard.html",
        img: "imagens-games/Call of Duty Black Ops.jpg"
    },
    {
        name: "Spider Man 2",
        url: "/jogos/resident-evil-biozard.html",
        img: "imagens-games/spiderman2.jpg"
    },
    {
        name: "The Witcher",
        url: "/jogos/resident-evil-biozard.html",
        img: "imagens-games/the-witcher.jpg"
    },
    {
        name: "Lies of P",
        url: "/jogos/resident-evil-biozard.html",
        img: "imagens-games/Lies of P.jpg"
    },
   {
        name: "Dark Souls 2",
        url: "/jogos/resident-evil-biozard.html",
        img: "imagens-games/dark souls 2.jpg"
    },
   {
        name: "Assasin's Creed Valhalla",
        url: "/jogos/resident-evil-biozard.html",
        img: "imagens-games/Assassin's Creed Valhalla.jpg"
    },
 {
        name: "Assasin's Creed Mirage",
        url: "/jogos/resident-evil-biozard.html",
        img: "imagens-games/assasins-creed-mirage.jpg"
    },
     {
        name: "Hogwarts Legacy",
        url: "/jogos/resident-evil-biozard.html",
        img: "imagens-games/hogwarts-legacy.jpg"
    },
    {
        name: "Dying Light 2",
        url: "/jogos/resident-evil-biozard.html",
        img: "imagens-games/dying-light22.jpg"
    },

];

const input = document.getElementById('searchInput');
const suggestionsBox = document.getElementById('suggestions');

input.addEventListener('input', () => {
    const query = input.value.toLowerCase().trim();
    suggestionsBox.innerHTML = '';

    if (query === '') {
        suggestionsBox.style.display = 'none';
        return;
    }

    const filtered = games.filter(game => game.name.toLowerCase().includes(query));

    if (filtered.length > 0) {
        filtered.forEach(game => {
            const link = document.createElement('a');
            link.href = game.url;

            const img = document.createElement('img');
            img.src = game.img;
            img.alt = game.name;

            const text = document.createElement('span');
            text.textContent = game.name;

            link.appendChild(img);
            link.appendChild(text);
            suggestionsBox.appendChild(link);
        });
        suggestionsBox.style.display = 'block';
    } else {
        suggestionsBox.style.display = 'none';
    }
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-box')) {
        suggestionsBox.style.display = 'none';
    }
});



//   mostrar mais 

const suggestions = document.getElementById('suggestions');

let filteredGames = [];
let currentIndex = 0;
const pageSize = 3;

function clearSuggestions() {
    suggestions.innerHTML = '';
}

function renderGames() {
    // remove botão antigo (se existir)
    const oldButton = document.querySelector('.load-more-item');
    if (oldButton) oldButton.remove();

    const slice = filteredGames.slice(currentIndex, currentIndex + pageSize);
    slice.forEach(game => {
        const link = document.createElement('a');
        link.href = game.url;

        const img = document.createElement('img');
        img.src = game.img;
        img.alt = game.name;

        const span = document.createElement('span');
        span.textContent = game.name;

        link.appendChild(img);
        link.appendChild(span);
        suggestions.appendChild(link);
    });

    currentIndex += pageSize;

    // Se ainda tiver mais jogos, cria o botão no final da lista
    if (currentIndex < filteredGames.length) {
        const btn = document.createElement('button');
        btn.textContent = 'Carregar mais ﾠ→';
        btn.className = 'load-more-item';
        btn.addEventListener('click', () => {
            window.location.href = 'games.html'; // Troque pelo link da sua página
        });
        suggestions.appendChild(btn);
    }

    suggestions.style.display = filteredGames.length > 0 ? 'block' : 'none';
}

input.addEventListener('input', () => {
    const query = input.value.toLowerCase().trim();
    clearSuggestions();
    currentIndex = 0;

    if (query === '') {
        filteredGames = [];
        suggestions.style.display = 'none';
        return;
    }

    filteredGames = games.filter(g => g.name.toLowerCase().includes(query));
    renderGames();
});

// fechar ao clicar fora
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-menu')) {
        suggestions.style.display = 'none';
    }
});