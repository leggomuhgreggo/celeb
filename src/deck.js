import shuffleArray from 'shuffle-array';

class DrawDeck {
  constructor(cards) {
    this.allCards = cards;
    this.drawPile = [];

    this.shuffle();
  }

  shuffle() {
    this.drawPile = shuffleArray(this.allCards, { copy: true });
  }

  draw() {
    if (this.drawPile.length === 0)
      this.shuffle();

    return this.drawPile.pop();
  }

  setCards(cards) {
    this.allCards = cards;
  }
};


export default DrawDeck;
