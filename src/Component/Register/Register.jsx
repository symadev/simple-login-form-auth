import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../ContextProvider/ContextProvider";


const Register = () => {
  const navigate = useNavigate();


const {createUser} = useContext(AuthContext)




    
    const handleRegister = (e) => {
        event.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);



        createUser(email,password)
        .then(result =>{
          console.log(result.user);
          e.target.reset();
          navigate('/');
        })
        .catch(error=>{
           console.log('Error', error.message);
        })




        // এই অংশটি প্রয়োজন হয় কারণ createUser(email, password) একটি Promise রিটার্ন করে।
        // 1️ createUser(email, password) ফাংশনটি Firebase Authentication থেকে ইউজার তৈরি করার জন্য ডাটা পাঠায়।

        // এটি একটি অ্যাসিনক্রোনাস (asynchronous) অপারেশন, অর্থাৎ এটি তাৎক্ষণিকভাবে ফলাফল দেয় না।
        // Firebase রিকোয়েস্টটি প্রসেস করে ইউজার তৈরি হলে then() ব্লক চলে, আর ত্রুটি হলে catch() ব্লক চলে।





    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Register now!</h1>
           
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
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
                            <button  className="btn btn-accent w-auto">Register Now!</button>
                        </div>
             
            </form>
            <p className="ml-12 p-4 text-sm">Already sign in?   please <Link to ="/login">Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Register;