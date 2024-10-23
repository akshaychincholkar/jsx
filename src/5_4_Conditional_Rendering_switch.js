import React, {Component} from "react";
class SwitchComponent extends Component{
    constructor(props){
        super(props);
        this.state ={
            LoggedIn: true
        };
    }
    
    render(){
        let { LoggedIn } = this.state;
        return(
            <div>
                <br/>Switch case:
                <br/>
                <SwitchDemo loggedIn={LoggedIn}></SwitchDemo>
                {/* <button>Logout</button> */}
                
            </div>
        );
    }
}
const SwitchDemo = props => {
    let {loggedIn} = props;
    switch(loggedIn){
        case true: return <button>Logout</button>
                    break;
        case false: return <button>Log In</button>
                    break;
            default: return <button>default</button>
    }
};


export default SwitchComponent;