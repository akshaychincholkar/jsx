import React from "react";
import { ReactDOM } from "react";
import ParentComponents from "./2_1_props";

function App1 (){

 const year = new Date().getFullYear();;

 const element = <h1>This is {year}</h1>;

 

 return (

    <div><h1>Ganpati Bappa Mourya!</h1>
    <h1>{year}</h1>
    <h1>Props in React.js</h1>
    <ParentComponents/>
    </div>
    

 );

};

 

export default App1;