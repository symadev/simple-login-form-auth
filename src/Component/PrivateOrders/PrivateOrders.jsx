import { useContext } from "react";
import { AuthContext } from "../ContextProvider/ContextProvider";
import { Navigate } from "react-router-dom";

//akhon context ar moddhe ja rakhchi shob access korte parbo amra
const PrivateOrders = ({children}) => {
    const {user,loading} = useContext(AuthContext)

    //user jdi login kora thake taile she jekahne jaite chai take oikahne jaite daw

if(loading){

    return <span className="loading loading-spinner loading-lg"></span>
}




    if(user){
return children;
    }
    //jdi user na thake taile login a achole jaw
    return (
       
            <Navigate to="/login" />
          
    );
};

export default PrivateOrders;