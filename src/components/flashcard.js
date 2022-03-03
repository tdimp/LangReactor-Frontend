import React from "react";

function FlashCard({
    card: {id, targetLanguageText, sourceLanguageText, image}
}) {

    return (
        <div className="card">
            <h1>{targetLanguageText}</h1>
            <img className="flashcard-image" src={image}/>
        </div>
    )
}

export default FlashCard;