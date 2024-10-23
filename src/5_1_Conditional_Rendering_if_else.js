import React,{Component} from "react";
 class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            LoggedIn: true
        };
    }
    render(){
        if(this.state.LoggedIn){
            return(
                <div>------------------------------------------------------------------------------------------------------------
                    <br></br><button>LOGOUT</button>
                </div>
            );
        }else{
            return(
                <div>------------------------------------------------------------------------------------------------------------
                    <br></br><button>LOGIN</button>
                </div>
            );
        }
    }
 }
 export default App;