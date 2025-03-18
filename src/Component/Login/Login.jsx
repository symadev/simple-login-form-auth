import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../ContextProvider/ContextProvider";


const Login = () => {

const {signInUser} = useContext(AuthContext)



    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email,password);



        signInUser(email,password)
        .then(result =>{
          console.log(result.user);

        })
        .catch(error=>{
           console.log('Error', error.message);
        })

    
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Login now!</h1>
           
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email"  className="input input-bordered" placeholder="Email"  required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password"   name='password'className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
             
              <div className="form-control mt-6">
                            <button className="btn btn-accent">Login</button>
                        </div>
             
            </form>
            <p className="ml-10 p-4 text-sm">Already have an account?please <Link to ="/register">Register</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Login;