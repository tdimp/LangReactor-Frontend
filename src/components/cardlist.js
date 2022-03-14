import React from "react";
import FlashCard from "./flashcard";

function CardList({ cards, handleDelete }) {
    return (
        <ul>
            {cards.map((card) => (
                <FlashCard
                    key={card.id}
                    card={card}
                    handleDelete={handleDelete}
                />
            ))}
        </ul>
    )
}

export default CardList;