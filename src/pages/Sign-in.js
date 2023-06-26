import React, {useState} from 'react'
import '../pages/Sign-in.css'
import {auth} from '../Firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';


function Signin () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const signIn = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential);
        })
        .catch((error) => {
          console.log(error);
        });
    };

  return (
    <>
        <div className="container">
            <div className="card">
                <div className="form">
                    <div className="left-side">
                        <img src="https://images.unsplash.com/photo-1644542410329-44b2286639d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" />
                    </div>

                    <div className="right-side">
                        <div className="register">
                            <p>Already a Member?{""}
                              <span>
                                <Link to='/sign-up'>Register Now</Link>
                              </span>
                            </p>
                        </div>

                        <div className="hello">
                            <h2>Hello Again!</h2>
                            <h4>Welcome back you have been missed! </h4>
                        </div>

                        
                        <div className="sign-in-container">
                          <form onSubmit={signIn}>
                            <h1>Log In to your Account</h1>
                            <input
                              type="email"
                              placeholder="Enter your email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            ></input>
                            <input
                              type="password"
                              placeholder="Enter your password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            ></input>
                            <div className='btn'>
                              <button type="submit">Log In</button>
                            </div>  
                          </form>
                        </div>

                        <hr />
                        <div className="or">
                            <p>or SignIn with</p>
                        </div>
                        <div className="boxes">
                            <span><img src="https://imgur.com/XnY9cKl.png" /></span>
                            <span><img src="https://imgur.com/ODlSChL.png" /></span>
                            <span><img src="https://imgur.com/mPBRdQt.png" /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Signin
