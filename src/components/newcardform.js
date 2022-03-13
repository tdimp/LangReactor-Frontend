import React, { useState } from "react";

// Use State here to dynamically show a preview of the new card before it is
// submitted to the database.

function NewCardForm() {
    const [targetLanguageText, setTargetLanguageText] = useState("");
    const [sourceLanguageText, setSourceLanguageText] = useState("");
    const [image, setImage] = useState("");

    function handleFormSubmit(e) {
        e.preventDefault();

        fetch(`http://localhost:3004/flashcards`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                sourceLanguageText: sourceLanguageText,
                targetLanguageText: targetLanguageText,
                image: image,
            }),
        })
            .then((r) => r.json())
            .then((newCard) => console.log(newCard))
    }

    return (
        <div className="new-card-form">
            <h2>Add Flashcard</h2>
            <form onSubmit={handleFormSubmit}>
                <input 
                    type="text"
                    name="target"
                    placeholder="Target Language Text"
                    value={targetLanguageText}
                    onChange={(e) => setTargetLanguageText(e.target.value)}
                    required
                />
                <input
                    type="text"
                    name="source"
                    placeholder="Source Language Text"
                    value={sourceLanguageText}
                    onChange={(e) => setSourceLanguageText(e.target.value)}
                    required
                />
                <input
                    type="text"
                    name="image"
                    placeholder="Image URL (optional)"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewCardForm;