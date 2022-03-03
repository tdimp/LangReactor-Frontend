import React from "react";

function About() {
    return (
        <div>
            <h1>About</h1>
            <p>
                This app is to assist those who want to learn a second language
                by integrating a translator and a flashcard deck within a single app.
                <hr></hr>
                Users can enter text into the translator and paste the result into the 
                Add New Card page. The user must enter the text for their desired target 
                language, and if desired users can add the translation to their first language
                and/or an image to accompany the target language text on the flash card.
                <hr></hr>
                Combining images with the target language text can help recall of new vocabulary
                by helping users associate an image with the target language text, facilitating
                the elimination of the intermediate step of translating the target language into
                the user's source language.
            </p>
        </div>
    );
}

export default About;