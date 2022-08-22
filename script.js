let quantityCards;
function onLoad() {
    quantityCards = prompt("Seja bem vindo(a) ao Parrot Card Game! Com quantas cartas deseja jogar? (Escolha um número par entre 4 e 14)");
    if(quantityCards == 1 || quantityCards == 3 || quantityCards == 5 || quantityCards == 7 || quantityCards == 9 || quantityCards == 11 || quantityCards == 13) {
        alert("Você digitou um número ímpar. Por favor, escolha um número par!")
        quantityCards = prompt("Seja bem vindo(a) ao Parrot Card Game! Com quantas cartas deseja jogar? (Escolha um número par entre 4 e 14)");
    } 
}
onLoad()