let quantityCards;
cards = [];
function onLoad() {
    quantityCards = prompt("Seja bem vindo(a) ao Parrot Card Game! Com quantas cartas deseja jogar? (Escolha um número par entre 4 e 14)");
    while(quantityCards == 1 || quantityCards == 3 || quantityCards == 5 || quantityCards == 7 || quantityCards == 9 || quantityCards == 11 || quantityCards == 13 || quantityCards > 14) {
        alert("Você digitou um número inválido. Por favor, escolha outro número!")
        quantityCards = prompt("Seja bem vindo(a) ao Parrot Card Game! Com quantas cartas deseja jogar? (Escolha um número par entre 4 e 14)");
    } 
}
onLoad()

function distributeCards() {
    for(let i = 0; i < cards.length; i++) {
        const game = document.querySelector('.game');
        const card = `<li class="card">
        <div class='front-card'>
            <img src='assets/front 10.png'>
        </div>
            <div class='back-card'>
            <img src=''>
            </div>
        </li>`;
        game.innerHTML += card;
    }
}
