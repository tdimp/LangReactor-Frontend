import React, { useState, useEffect } from "react";
import NewCardForm from "./newcardform";
import CardList from "./cardlist";


function FlashCardDeck() {

    useEffect(() => {
        fetch(`http://localhost:3004/flashcards`)
            .then((r) => r.json())
            .then(setCards)
    }, []);

    const [cards, setCards] = useState([]);
    console.log(cards)

    return (
        <main>
            <CardList cards={cards} />
        </main>
    )
}

export default FlashCardDeck;