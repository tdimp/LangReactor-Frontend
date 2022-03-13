import React, { useState, useEffect } from "react";
import NewCardForm from "./newcardform";
import FlashCard from "./flashcard";


function FlashCardDeck() {

    useEffect(() => {
        fetch(`http://localhost:3004/flashcards`)
            .then((r) => r.json())
            .then(setCards)
    }, []);

    const [cards, setCards] = useState([]);

    function handleDeleteClick(e) {
        console.log(e.target);
    }


    return (
        <main>
            <ul>
            {cards.map((card) => (
                <FlashCard
                    key={card.id}
                    card={card}
                    handleDelete={handleDeleteClick}
                />
            ))}
        </ul>
        </main>
    )
}

export default FlashCardDeck;