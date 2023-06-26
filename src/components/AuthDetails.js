import {onAuthStateChanged, signOut} from 'firebase/auth'
import React, {useEffect, useState} from 'react'
import { auth } from '../Firebase'
import '../components/AuthDetails.css'

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);
  
    useEffect(() => {
      const listen = onAuthStateChanged(auth, (user) => {
        if (user) {
          setAuthUser(user);
        } else {
          setAuthUser(null);
        }
      });
  
      return () => {
        listen();
      };
    }, []);
  
    const userSignOut = () => {
      signOut(auth)
        .then(() => {
          console.log("sign out successful");
        })
        .catch((error) => console.log(error));
    };
  
    return (
      <div className='sign-out'>
        {authUser ? (
          <>
            <p>{`Signed In as ${authUser.email}`}</p>
            <button onClick={userSignOut}>Sign Out</button>
          </>
        ) : (
          <h2>Signed Out</h2>
        )}
      </div>
    );
  };
  
  export default AuthDetails;