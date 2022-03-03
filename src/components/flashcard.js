import React from "react";

function FlashCard({
    card: {id, targetLanguageText, sourceLanguageText, image}
}) {

    return (
        <div className="card">
            <h2>{targetLanguageText}</h2>
            <img className="flashcard-image" src={image}/>
            <button className="flashcard-button">CLICK</button>
        </div>
    )
}

export default FlashCard;