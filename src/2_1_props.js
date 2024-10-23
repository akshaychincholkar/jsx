import React from "react";
import ChildComponent from "./2_2_props";
import Section_1, { Section_2 } from "./3_components";
import CountClicks from "./4_functional_components";
import App from "./5_1_Conditional_Rendering_if_else";
import Conditional from "./5_2_Conditional_Rendering";
import Logical from "./5_3_Conditional_Rendering_logical";
import SwitchComponent from "./5_4_Conditional_Rendering_switch";

function ParentComponents(){
    return(
        <div>
            <ChildComponent name="Akshay" father="Subhash Chincholkar"/>
            <Section_1></Section_1>
            <Section_2></Section_2>
            <CountClicks></CountClicks>
            <App></App>
            <Conditional></Conditional>
            <Logical/>
            <SwitchComponent LoggedIn = {true}/>
        </div>
    );
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