import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from '../Firebase'
import '../pages/Sign-up.css'

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container-1">
        <div className="card-1">
          <div className="form-1">
            <div className="left_side">
              <img src="https://images.unsplash.com/photo-1493514789931-586cb221d7a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" />
            </div>

            <div className="right_side">
              <div className="create-acc">
                <h2>Don't have an account?</h2>
              </div>
              <div className="sign-in_container">
                <form onSubmit={signUp}>
                  <h1>Create Account</h1>
                  <input
                    type="username" 
                    placeholder="Usename" 
                  ></input>
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
                  <div className="btn-1">
                    <button type="submit">Sign Up</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  );
};

export default SignUp;