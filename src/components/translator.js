import React, { useState } from "react";



function Translator() {
    const [translation, setTranslation] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const text = e.target[0].value
        const targLang = e.target[1].value
        console.log(text)
        fetch(`https://api-free.deepl.com/v2/translate?auth_key=8b604fe9-81cc-803f-72f3-cfcff7236ae4:fx&text=${text}&target_lang=${targLang}`)
            .then(r => r.json())
            .then(data => setTranslation(data.translations[0].text)
        );
    }

    console.log(translation)
    
    return (
        <div>
            <form id="input" onSubmit={(e) => handleSubmit(e)}>
                <h1>Translator</h1>
                <label htmlFor="input-text">Enter Text</label>
                <input type="text" placeholder="Copy your text here" />
                <select id="target-language">
                    <option value="en">English</option>
                    <option value="de">German</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                </select>
                <button>Translate</button>
            </form>
            <div id="output">
                <h1>{translation}</h1>
            </div>
        </div>
    );
}

export default Translator;