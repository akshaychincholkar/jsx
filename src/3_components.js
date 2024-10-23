// Components in React are used to divide a user interface into 
// independent components that can be handled easily and are reusable. 

// Types: 1. Functional 2. Class-based
// 1. Functional Components
import React from "react";

function Section_1(){
    return(
            <div>
                ------------------------------------------------------------------------------------------------------------
                <h2>Functional Components</h2>
                <h3>Section 1 of the Syllabus - Functional component using regular function()</h3>
            </div>
            
    
    );
}
export const Section_2 = () => {
    return (<h3>Section 2 of the Syllabus - Functional component using const </h3>);
}
export default Section_1;