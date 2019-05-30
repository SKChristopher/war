class Deck {
  constructor() {
    this.reset()
    this.shuffle()
  }

  reset() {
    this.deck = []

    const suits = ["Hearts", "Spades", "Clubs", "Diamonds"]
    const numbers = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"]

    for (let i = 0; i < suits.length; i += 1) {
      for (let j = 0; j < numbers.length; j += 1) {
        let value = j + 1
        if (j === 0) value = 14
        this.deck.push({
          suit: i,
          number: j,
          value,
          name: `${numbers[j]} of ${suits[i]}`,
        })
      }
    }
  }

  shuffle() {
    const { deck } = this
    let m = deck.length,
      i

    while (m) {
      i = Math.floor(Math.random() * m--);
      
      [deck[m], deck[i]] = [deck[i], deck[m]]
    }

    return this
  }

  deal() {
    return this.deck.pop()
  }
}

export default Deck;
