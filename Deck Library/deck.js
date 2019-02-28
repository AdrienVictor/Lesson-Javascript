// deck of 52 cards library (personnal:module.exports=check for more infos)
class Deck {
  constructor() {
    this.deck = [];
    this.dealtCards = [];
  }
  //   genenrate your card deck of 52 cards
  generateDeck() {
    let card = (suit, value) => {
      this.name = `${value} of ${suit}`;
      this.suit = suit;
      this.value = value;

      return { name: this.name, suit: this.suit, value: this.value };
    };
    let values = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A"
    ];
    let suits = ["Clubs", "Diamonds", "Spades", "Hearts"];
    for (let s = 0; s < suits.length; s++) {
      for (let v = 0; v < values.length; v++) {
        this.deck.push(card(suits[s], values[v]));
      }
    }
  }
  //   print your deck of cards
  printDeck() {
    if (this.deck.length === 0) {
      console.log("Deck has not been generated");
    } else {
      for (let c = 0; c < this.deck.length; c++) console.log(this.deck[c]);
    }
  }
  //   shuffle the deck
  shuffleDeck() {
    let currentIndex = this.deck.length,
      tempVal,
      randInd;
    while (0 !== currentIndex) {
      randInd = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      tempVal = this.deck[currentIndex];
      this.deck[currentIndex] = this.deck[randInd];
      this.deck[randInd] = tempVal;
    }
  }
  //   deal a number of cards
  deal(numCards) {
    let cards = [];
    for (let c = 0; c < numCards; c++) {
      let dealtCard = this.deck.shift();
      cards.push(dealtCard);
      this.dealtCards.push(dealtCard);
    }
    return cards;
  }
  replace() {
    this.deck.unshift(this.dealtCards.shift());
  }
  clearDeck() {
    this.deck = [];
  }
}

deck = new Deck();
deck.generateDeck();
deck.shuffleDeck();
deck.printDeck();
console.log("test dealt card");
console.log(deck.deal(2));
deck.replace();
deck.printDeck();
