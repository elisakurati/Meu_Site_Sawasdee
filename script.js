document.querySelector(".hamburguer").addEventListener("click", () =>{
    document.querySelector(".container").classList.toggle ("show-menu")  
});

const hamburguer = document.querySelector('.hamburguer');
const body = document.querySelector('body');

hamburguer.addEventListener('click', () => {
    body.classList.toggle('show-menu');
});

document.getElementById('saibaMais').addEventListener('click', function() {
    window.location.href = 'saiba.html';
});


function loadMoreSeries() {
    const container = document.getElementById('seriesContainer');
    for (let i = 0; i < 6; i++) { // Adiciona 6 novas séries
        const seriesItem = document.createElement('div');
        seriesItem.classList.add('series-item');
        seriesItem.innerHTML = `<a href="https://t.me/link_do_telegram_${i + 3}">
            <img src="imagens/serie${i + 3}.jpg" alt="Série ${i + 3}">
        </a>`;
        container.appendChild(seriesItem);
    }
}