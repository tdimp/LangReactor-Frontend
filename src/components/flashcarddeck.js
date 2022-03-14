import React, { useState, useEffect } from "react";
import NewCardForm from "./newcardform";
import FlashCard from "./flashcard";
import CardList from "./cardlist";


function FlashCardDeck() {

    useEffect(() => {
        fetch(`http://localhost:3004/flashcards`)
            .then((r) => r.json())
            .then(setCards)
    }, []);

    const [cards, setCards] = useState([]);

    function handleDeleteClick(id) {
        console.log(id.target)
        const newDeck = cards.filter((card) => card.id !== id);
        setCards(newDeck);
    }


    return (
        <main>
            <CardList cards={cards} handleDelete={handleDeleteClick} />
        </main>
    )
}

export default FlashCardDeck;