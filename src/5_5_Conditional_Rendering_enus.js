import React,{Component} from "react"
const Login = () =>{
    return <button>Logout</button>;
}
const Logout = () =>{
    return <button>Login</button>;
}
const ENUM_LOGSTATE = {
    Login: <Login/>,
    Logout: <Logout/>
};

function EnumState({state}){
    return <div>
        {ENUM_LOGSTATE[state]}
    </div>;
}

class EnumRender extends Component{
    render(){
        return( 
            <div>
            <br/>Enum Conditional:
            <EnumState state="Login"></EnumState>
            </div>
        );
    }
}
export default EnumRender;