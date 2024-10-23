import React from "react";

function ChildComponent(props){
    return (
        <div>
            <h2>Hi {props.name}, I am Child of {props.father}</h2>
        </div>
    )
}
export default ChildComponent;