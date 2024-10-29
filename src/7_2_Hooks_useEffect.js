import React, { useState, useEffect } from 'react';

function UseEffectDemo(){
    const [name,setName] = useState("");
    const [isEnterPressed,setIsEnterPressed] = useState(false);
   
    useEffect(()=>{
        if(isEnterPressed){
            if(name){
                alert(name)
             }
        }
    },[isEnterPressed,name])
    const hasEnterPressed = (e) =>{
        if(e.key === 'Enter'){
            setIsEnterPressed(true);
        }
    };
    return(
        <div>------------------------------------------------------------------------------------------------------------
            <br/> useEffect usage demo: 
            <br/><input type="text" placeholder="Enter Name & Press enter" value={name} 
            onChange={(e)=>setName(e.target.value)} 
            onKeyPress={hasEnterPressed}/>
            {name}
        </div>
    )

}
export default UseEffectDemo;
// []: Runs once on mount.
// [state]: Runs whenever the specified state changes.
// Cleanup functions: useEffect can return a cleanup function 
// to remove side effects, like event listeners, to avoid memory leaks.