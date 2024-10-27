// All of the React components have a render function. The render function specifies 
// a React component's HTML output. React JSX (JavaScript Extension) is a React 
// extension that allows you to write HTML-like JavaScript code. We can also say 
// that JSX is a React-specific HTML-like syntax that extends ECMAScript to allow 
// HTML-like syntax to coexist with JavaScript/React code. Preprocessors (i.e., 
//     transpilers like babel) employ this syntax to convert HTML-like syntax into 
//     standard JavaScript objects that a JavaScript engine can parse.

// React JSX
// JSX means JavaScript XML or JavaScript Extension Syntax, allowing us to combine HTML 
// and JavaScript in React easily. In short, it will enable us to write the HTML code in React, 
// and using JSX makes it easier for us to write and add HTML in the React code.

// Without using JSX
const textHere = React.createElement('h1', {}, 'This is an example without using JSX.');
const container = React.createElement('div','{}', textHere);
ReactDOM.render(container,rootElement);

// Application.JSX
import React, { Component } from 'react';  
class Application extends Component{  
    render(){  
        return(  
            <div>  
                <h1>Coding Ninjas</h1>  
                <p>Welcome! Let us know about JSX in depth.</p>  
            </div>  
        );  
    }  
}  

export default Application;