// 1. Import react and reactDOM libraries

// these are libraries used to show components on the screen
import React from "react"; // knows how multiple components work together
import ReactDOM from "react-dom/client"; // knows how to get component to show up in the browser
// import MyApp from "./App1";
import MyApp from "./1_jsx_intro"; // Thus, name of the file is imported 


// import App from "./App";
// 2. Get a reference to div with ID root
    // index.html contains  <div id="root"></div>
const el = document.getElementById('root');

// 3. Tell react to take control of that element
const root = ReactDOM.createRoot(el);

// 4. Create a component
    //Seperate file is created as App.js

// 5. Show the component on the screen

root.render(<MyApp/>);
// root.render(<App/>);
