// Before we move on to why functional components are stateless, we need to understand what a state is.

import { useState } from "react";

// In simple terms, a state is a JavaScript object in React used to represent information about a 
// component’s current situation. Its scope is inside a particular component, 
// and it is used for internal communication inside a component. 

// In React, functional components can have a concept similar to states by using hooks.

// Hooks in Functional Components
// if we wanted to add a state to a functional component, the only way to do that was to convert
// it to a class component. Hooks are a recently added feature in React that allows us to use all 
// React features without writing class components. 

// Now, there are two rules to use hooks:

// 1. We cannot call hooks inside loops, conditions, or nested functions.
// 2. Hooks can only be called from functional components in React and not any JavaScript function. 

function CountClicks(){
    const[clicks,setclicks] = useState(0);
    return(
        <div> ------------------------------------------------------------------------------------------------------------
            <br></br><button onClick={()=>{setclicks(clicks+1)}}>Increase your clicks</button>
            <h3>Number of clicks: {clicks}</h3>
        </div>
    );
}
export default CountClicks;
