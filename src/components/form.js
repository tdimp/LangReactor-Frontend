import React, { useState } from "react";

function Form() {
    const [input, setInput] = useState("hello");
    
    return (
        <form>
            <input type="text" value={input} />
        </form>
    );
}

export default Form;



//const germanURL = `https://lt-translate-test.herokuapp.com/?langpair=en-de&query=${input}&wortart=${type}`
//    fetch(germanURL)