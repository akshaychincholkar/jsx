import React from "react";
import { ReactDOM } from "react";
function App(){
    let message = 'Bye There';
    if(Math.random() > 0.5){
        message = 'Hi There';
    }
    return (
        <div>
            <h1>{message}</h1>
            <h2>{ new Date().toLocaleTimeString() }</h2>
            <input type = "number" min={5}/>
            <input type = "text" min={5} spellCheck={true}/>
            <textarea autoFocus={true}/>
        </div>
    );
}
export default App;