import { AppBar } from "../components/AppBar"
import { Balance } from "../components/Balance"
import {Users} from "../components/Users"
export const Dashboard=()=>{
       return <div>
        <AppBar/>
        <div className="m-8">
            <Balance value={"10,000"}/>
            <Users/>
        </div>
       </div>

    
}