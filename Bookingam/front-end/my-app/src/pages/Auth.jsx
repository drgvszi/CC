import React from "react";
// Import the functions you need from the SDKs you need
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut, onAuthStateChanged} from "firebase/auth";

const register = async (e) => {
  e.preventDefault();

  const email = e.target.email.value
  const password = e.target.pass.value
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      alert("welcome")
      // ...
    })
    .catch((error) => {
      alert(error.code)
      alert(error.message)
    });
    
}

const login = async (e) => {
  e.preventDefault();
  const email = e.target.email.value
  const password = e.target.pass.value
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("welcome")
      console.log(user)
      // ...
    })
    .catch((error) => {
      alert(error.code)
      alert(error.message)
    });
}

const signout = async(e)=>{
  e.preventDefault();
  const auth = getAuth();
  signOut(auth).then(() => {
  }).catch((error) => {
    // An error happened.
    alert(error.code)
    alert(error.message)
  });

}

const check = async(e)=>{
  e.preventDefault();
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    alert(uid)
    // ...
  } else {
    alert("no user")
    // User is signed out
    // ...
  }
  }
  )
}

function Auth() {
  return (
    <body>
      <div id="registerForm" class="center">
        <h1 id="header" class="text-center mt-5">Register Formm</h1>
          <form onSubmit={register}>
              <input type="text" name = "email"/>
              <input type="password" name = "pass"/>
              <button id="register" class="btn btn-primary" type="submit">Register</button>
          </form>
      </div>
      <div id="loginForm" class="center">
        <h1 id="header" class="text-center mt-5">Login Form</h1>
          <form onSubmit={login}>
              <input type="text" name = "email"/>
              <input type="password" name = "pass"/>
              <button id="login" class="btn btn-primary" type="submit">Login</button>
          </form>
      </div>
      <form onSubmit={signout}>
          <button id="signout" class="btn btn-primary" type="submit">Sign Out</button>
      </form>
      <form onSubmit={check}>
          <button id="check" class="btn btn-primary" type="submit"> Check </button>
      </form>
      
    </body>
  );

}

export default Auth;