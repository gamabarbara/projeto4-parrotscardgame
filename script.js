let quantityCards = 0;
let counterId;
let counter = 0;
let moves = 0;
let firstCard = null;
let secondCard = null;

function onLoadGame() {
  quantityCards = Number(
    prompt(
      "Seja bem vindo(a) ao Parrot Card Game! Com quantas cartas deseja jogar? (Escolha um número par entre 4 e 14)"
    )
  );
  while (quantityCards % 2 == 1 || quantityCards > 14) {
    alert("Você digitou um número inválido. Por favor, escolha outro número!");
    quantityCards = Number (prompt(
      "Seja bem vindo(a) ao Parrot Card Game! Com quantas cartas deseja jogar? (Escolha um número par entre 4 e 14)"
    )
      );
  }
  playGame();
}

function generateCards(cards) {
    const game = document.querySelector(".game");
  for (let i = 0; i < cards.length ; i++) {

    const card = `<li class="card" data-identifier="card" onclick="selectCard(this), gameMoves();">
        <div class='front-face face'>
            <img src='assets/front.png'>
        </div>
            <div class='back-face data-identifier="back-face" face'>
            <img src='assets/${cards[i]}.gif'>
            </div>
        </li>`;
    game.innerHTML += card;
  }
}

function distributeCards(cards, typesOfCards) {
    for (let i = 0; i < (quantityCards / 2); i++) {
      cards.push(typesOfCards[i]);
      cards.push(typesOfCards[i]);
    }
    cards.sort(comparator);
  }

function playGame() {
    typesOfCards = [
      "bobrossparrot",
      "explodyparrot",
      "fiestaparrot",
      "metalparrot",
      "revertitparrot",
      "tripletsparrot",
      "unicornparrot",
    ];
    const cards = [];
  
    distributeCards(cards, typesOfCards);
    generateCards(cards);
    timeCounter();
  }

function timeCounter() {
  counterId = setInterval(() => {
    counter++;
    document.querySelector(".counter span").innerHTML = counter;
  }, 1000);
}

function gameMoves() {
  document.querySelector(".moves span").innerHTML = moves;
}

function comparator() {
  return Math.random() - 0.5;
}

function selectCard(selectedCards) {
  if (selectedCards.classList.contains("selected")) {
    return;
  }
  if (secondCard !== null) {
    return;
  }
  moves++;
  if (firstCard === null) {
    firstCard = selectedCards;
  } else {
    secondCard = selectedCards;

    if (firstCard.innerHTML === secondCard.innerHTML) {
      selectedCards += 2;
      cardReset();
      setTimeout(gameEnd, 1000);
    } else {
      setTimeout(unclickCard, 1000);
    }
  }
  selectedCards.classList.add("selected");
}

function unclickCard() {
  firstCard.classList.remove("selected");
  secondCard.classList.remove("selected");
  cardReset();
}

function cardReset() {
  firstCard = null;
  secondCard = null;
}


function restartGame() {
  counter = 0;
  document.querySelector(".counter span").innerHTML = counter;
  moves = 0;
  document.querySelector(".moves span").innerHTML = moves;

  quantityCards = 0;
  selectedCards = 0;
  cardReset();
}

function gameEnd() {
  selectedCards = 0;
  if (selectedCards === quantityCards) {
    document.querySelector("ul").innerHTML = "";
    alert(
      `Parabéns! Você ganhou o jogo em ${counter} segundos e com ${moves} jogadas.`
    );
    clearInterval(counterId);
    const playAgain = confirm("Deseja jogar novamente?");
    if (playAgain) {
      restartGame();
      onLoadGame();
    } else {
      restartGame();
      document.querySelector(".game").innerHTML = `
      <p>Muito obrigada por jogar! Espero que tenha gostado!</p>
      `;
    }
  }
}
onLoadGame();
