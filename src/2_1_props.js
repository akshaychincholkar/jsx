import React from "react";
import ChildComponent from "./2_2_props";
import Section_1, { Section_2 } from "./3_components";
import countClicks from "./4_functional_components";

function ParentComponents(){
    return(
        <div>
            <ChildComponent name="Akshay" father="Subhash Chincholkar"/>
            <Section_1></Section_1>
            <Section_2></Section_2>
            <countClicks/>
        </div>
    )
}
export default ParentComponents;


{/* Template literals with variables    =>	<MyComponent prop={`My String Value ${myVariable}`}>
Number Literals	                        =>  <MyComponent prop={42} />
Boolean Literals	                    =>  <MyComponent prop={false} />
Plain object literals	                =>  <MyComponent prop={{ property: 'Value' }} />
Array Literals                          =>	<MyComponent prop={['Item 1', 'Item 2']} />
JSX                                     =>	<MyComponent prop={<Message who="Joker" />} />
Variables having any kind of value	    =>  <MyComponent prop={myVariable} /> */}

// default props: name, color