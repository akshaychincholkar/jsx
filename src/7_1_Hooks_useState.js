import React, { useState } from 'react';

function UseStateDemo() {
    // Declare a new state variable called "count" and set the initial value to 0
    const [count, setCount] = useState(10);

    // Function to increment the count
    const increment = () => {
        setCount(count + 1);
    };
    // let's see the user example
    const [user,setUser] = useState({name:'',age:''})

    const updateName = (e) => setUser({...user, name:e.target.value});
    const updateAge = (e) => setUser({...user,age: e.target.value});

    const [isVisible,setIsVisible] = useState(false);
    const toggleVisibility =(e)=>setIsVisible(!isVisible);

    return (
        <div> ------------------------------------------------------------------------------------------------------------
            <br/>useState() use case:
            <button onClick={increment}>Increment</button>
            <br/>Counter: {count}
            <br/>
            <input type='text' placeholder='Name' value={user.name} onChange={updateName}/>
            <input type='text' placeholder='Age' value={user.age} onChange={updateAge}/>
            <p>User Name: {user.name} </p>
            <p>User Age: {user.age}</p>
            <button onClick={toggleVisibility}>{isVisible ? "Hide" : "Show"} Message</button>
            {isVisible && <div>Hello, this is a toggled message!</div>}
        </div>
    );
}

export default UseStateDemo;
