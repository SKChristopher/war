import React, { useState, useEffect } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import Deck from "../components/deck"

const SecondPage = () => {
  const [card, setCard] = useState()
  const [deck, setDeck] = useState(new Deck())

  function handleDeal() {
    if (deck.deck.length) {
      setCard(deck.deal())
    }
    else {
      deck.reset()
    }
  }

  return (
    <Layout>
      <SEO title="Play" />
      { card ? <Card number={card.number} suit={card.suit} /> : null }
      <button onClick={handleDeal}>
        {deck.deck.length ? `Deal (${deck.deck.length} cards left)` : 'Reset'} 
      </button>
    </Layout>
  )
}

export default SecondPage
