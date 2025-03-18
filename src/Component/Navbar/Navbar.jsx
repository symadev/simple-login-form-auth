import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../ContextProvider/ContextProvider";

const Navbar = () => {


   
    const {user,signOutUser} = useContext(AuthContext );
    console.log(user);


    //aikahne console korle name ar value dekha jabe



    // React Context API ব্যবহার করা হয় props drilling এড়ানোর জন্য এবং অ্যাপের ভেতরে global state management সহজ করতে। 
    // যখন আমাদের একটি data বা state অনেক গভীর কম্পোনেন্টে পাঠাতে হয়, 
    // তখন বারবার props হিসেবে পাঠানো ঝামেলাপূর্ণ হয়। এই সমস্যা সমাধানের জন্য Context API ব্যবহার করা হয়।


const handleSignOut = () =>{
    signOutUser()
    .then(() =>{
        console.log("user sign out successfully");

      })
      .catch(error=>{
         console.log('Error', error.message);
      })
}







        const links =  <>
 <li><NavLink to="/">Home</NavLink></li>
 <li><NavLink to="/login">Login</NavLink></li>
 <li><NavLink to="/register">Register</NavLink></li>
                        


</>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">


                        {links}
                    
                    
                    </ul>
                    
                </div>
                <a className="btn btn-ghost text-xl">Form</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">


                {links}
                
                
                </ul>
                
            </div>
            <div className="navbar-end">
                {/* <a className="btn">{user?.email}</a> */}
                <a className="btn">
                   {
                     user ?<>  
                     <span>{user.email}</span>
                     <a  onClick = {handleSignOut}className="btn">Sign out</a>
                     
                       </>
                      : <Link to='/login'>Login</Link>
                   } 
                   </a>


                {/* user jdi thake taile mail ar kache jaba r na hoi jaba na */}
            
            
            </div>


        </div>
    );
    
};

export default Navbar;