import React,{Component} from "react";
class Logical extends Component{
    constructor(props){
        super(props);
        this.state = {
            LoggedIn : true
        }
    }
    render(){
        let {LoggedIn } = this.state;
        return(
            <div>
                <br/>Logical login status 
                {/* <br/>{loggedIn && <button>LOGOFF</button>} */}
                <br/>{LoggedIn ? <button>LOGOFF</button>:<button>LOGON</button>}
            </div>
        )
    }
}
export default Logical;