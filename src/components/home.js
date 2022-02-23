import React, {useEffect} from "react";
import Form from "./form";

const germanURL = `https://lt-translate-test.herokuapp.com/?langpair=en-de&query=change&wortart=VERB`

function Home() {
    useEffect(() => {
        fetch(germanURL)
            .then((r) => r.json())
            .then((data) => console.log(data))
    })

    return (
        <div>
            <h1>Home!</h1>
            <Form />
        </div>
    );
}

export default Home;