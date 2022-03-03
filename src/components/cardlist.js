import React from "react";
import FlashCard from "./flashcard";

function CardList({ cards }) {
    return (
        <ul>
            {cards.map((card) => (
                <FlashCard
                    key={card.id}
                    card={card}
                />
            ))}
        </ul>
    )
}

export default CardList;