import React, { useState } from "react";

function handleSubmit(e) {
    e.preventDefault();
    const text = e.target.childNodes[0].value
    fetch(`https://api-free.deepl.com/v2/translate?auth_key=8b604fe9-81cc-803f-72f3-cfcff7236ae4:fx&text=${text}&target_lang=DE`)
        .then(r => r.json())
        .then(data => console.log(data.translations[0].text))
    
}

function Form() {
    const [input, setInput] = useState("hello");
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search something" />
            <button>Search</button>
        </form>
    );
}

export default Form;