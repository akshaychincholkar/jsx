// Note: if-else statements do not work inside JSX.
//  So, we use them outside of our JSX to determine the components that are going to be used.
import React,{Component} from "react";
class Conditional extends Component{
    constructor(props){
        super(props)
        this.state= {
            LoggedIn : true
        };
    }
    render(){
        let {LoggedIn} = this.state;
        let Button;
        if(LoggedIn )    {
            Button = <button>LOGOUT</button>
        }else{
            Button = <button>LOGIN</button>
        }
        return(
            <div>
                <br/>Conditional button
                <br/>{Button}
            </div>
        );
    };
}
export default Conditional;