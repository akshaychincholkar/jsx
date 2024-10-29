// What are Hooks in React Js? 
// Hooks in React JS or React Hooks are a new feature in React 16.8 that enables 
// developers to access React concepts like state, context, refs, and lifecycle 
// events without having to use classes, which were previously exclusively available 
// in class-based components.

// React comes pre-loaded with a number of hooks. UseState and useEffect are the most crucial. 
// In React, there are three ways to express components:
// 1. class components 
 //2.  functional components
 //3.  Hooks with functional components.

//  Types of React Hooks

// 1. useState
// Purpose: Manages state in functional components.
// Usage: For tracking and updating values like form inputs or counters.
// Example: const [count, setCount] = useState(0);

// 2. useEffect
// Purpose: Handles side effects such as data fetching, subscriptions, or manually changing the DOM.
// Usage: Replaces lifecycle methods like componentDidMount and componentDidUpdate.
// Example: useEffect(() => { /* side effect */ }, [dependencies]);

// 3. useContext
// Purpose: Accesses context values in functional components.
// Usage: For sharing global data like themes or user info across components.
// Example: const theme = useContext(ThemeContext);

// First rule:

//  Hooks should be called only at the top level
// Hooks should never be called inside loops, conditions, or nested functions.
// Rather, it should always be called at the top-notch, before any returns. 
// This rule also ensures that Hooks are called each time in the same order every 
// time a function component renders. It helps to preserve the state of Hooks between 
// useState and useEffect function calls. 

 

// Second rule:

 

// Hooks should be called from React functions
// Avoid calling Hooks from javascript functions directly. Instead, call them react 
// function components and from custom Hooks. This rule also ensures that all stateful 
// logic in a component is clearly visible from its source code. 