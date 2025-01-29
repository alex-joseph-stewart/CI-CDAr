import React from "react";
import "./index.css"
import lobster from "./utilities/lobster.png"

function App(){
    return (
        <div className="app">
            <h1>Be a lobster!
            </h1>
            <p>When lobsters begin to grow out of their shell, they get uncomfortable. This discomfort <br></br>
            causes them to break out of their shell so they can grow a stronger and thicker one. Just by being <br></br>
            here, you're facing the discomfort of not knowing, shedding that shell, and growing. You're <br></br>
            a lobster!
            </p>
            <img src={lobster} alt='lobster picture'></img>
        </div>
    )
}
export default App;