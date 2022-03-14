import React, { useState } from "react";

function FlashCard({
    card: {
        id, 
        targetLanguageText, 
        sourceLanguageText, 
        image, 
    }, handleDelete
}) {

    const [isSourceText, setIsSourceText] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);

    function handleFlipClick() {
        const displayedText = (!isSourceText);
        setIsSourceText(displayedText);
        setIsFlipped(!isFlipped);
    }

    function handleDeleteClick() {
        fetch(`http://localhost:3004/flashcards/${id}`, {
            method: "DELETE",
        });
        handleDelete(id);
    }

    return (
        <div className={isFlipped ? "flipped-card" : "default-card"}>
            <button className="flashcard-delete" onClick={handleDeleteClick}>X</button>
            <h2>{isSourceText ? sourceLanguageText : targetLanguageText}</h2>
            <img className="flashcard-image" src={image}/>
            <button className="flashcard-button" onClick={handleFlipClick}>FLIP CARD</button>
        </div>
    )
}

export default FlashCard;