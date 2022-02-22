import React from "react";

function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);
}

function Login() {
    return (
        <form>
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>
            <button type="submit" onClick={handleSubmit}>Login</button>
        </form>
    );
}

export default Login;