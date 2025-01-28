import React from "react";
import "./index.css"
import lobster from "./utilities/lobster.png"

function App(){
    return (
        <div className="app">
            <h1>Welcome to Codesmith!
            </h1>
            <p>We cultivate technologists at the intersection of society and tech and empower them to meet this moment and thrive in an ever-changing world.
            </p>
            <img src={lobster} alt='lobster picture'></img>
        </div>
    )
}
export default App;