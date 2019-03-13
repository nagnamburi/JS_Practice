
//Blackjack by Nag Namburi
//Card variables
let suits = ["Spade", "Hearts", "Diamond", "Clubs"],
    value = ["Ace", "Kings", "Queen", "Jacks", "Two", "Three", 
    "Four", "Five" ,"Six", "Seven", 
    "Eight", "Nine", "Ten"];

//DOM varilables
let textArea = document.getElementById('text-area'),
    newGameButton = document.getElementById('new-game-button'),
    hitButton = document.getElementById('hit-button'),
    stayButton = document.getElementById('stay-button');

//GAME VARIABLES
let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [];

hitButton.style.display = 'none';
stayButton.style.display = 'none';
showStatus();

newGameButton.addEventListener('click', function(){
  gameStarted = true;
  gameOver = false;
  playerWon = false;

  deck = createDeck();
  shuffleDeck(deck);
  dealerCards = [getNextCard(), getNextCard()];
  playerCards = [getNextCard(), getNextCard()];
  
  newGameButton.style.display = 'none';
  hitButton.style.display = 'inline';
  stayButton.style.display = 'inline';
  showStatus();
});

function createDeck(){
  let deck = [];  
  for (let suitIdx = 0; suitIdx < suits.length; suitIdx++){
    for (let valueIdx = 0; valueIdx < value.length; valueIdx++){
      let card = {
        value: value[valueIdx],
        suit: suits[suitIdx]
      };
      deck.push(card);
    }
  }
  return deck;
}

function shuffleDeck(deck){
  for (let i = 0; i < deck.length; i++){
    let swapIdx = Math.trunc(Math.random() * deck.length);
    let tmp = deck[swapIdx];
    deck[swapIdx] = deck[i];
    deck[i] = tmp;
  }
}

function getCardString(card){
  return card.value + ' of ' + card.suit;
}

function getNextCard(){
  return deck.shift();
}

function showStatus(){
  if (!gameStarted) {
    textArea.innerText = 'Weclome to Blackjack';
    return;
  }
  
  for (var i=0; i<deck.length; i++){
    textArea.innerText += '\n' + getCardString(deck[i]);
  }
}

// function getNextCard(){
//   return deck.shift();
// }

// let deck = createDeck();

// let playerCards = [getNextCard(), getNextCard()];

// console.log("Welcome to Blackjack!");
// console.log("You are dealt:");
// console.log("  " + getCardString(playerCards[0]));
// console.log("  " + getCardString(playerCards[1]));

// for (let i = 0; i < deck.length; i++) {
//     console.log(deck[i]);  
// }




