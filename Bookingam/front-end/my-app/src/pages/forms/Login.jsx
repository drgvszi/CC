import React from "react";
// Import the functions you need from the SDKs you need
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "../pagesCSS/login_register.css"
const login = async (e) => {
  e.preventDefault();
  const email = e.target.email.value
  const password = e.target.pass.value
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .catch((error) => {
      alert(error.code)
    });

}
function Login() {
  return (
    <body>
      <div className="form">
        <div id="loginForm" class="center">
          <h1 >Login</h1>
          <form onSubmit={login}>
            <div className="input-container">
              <label>Email </label>
              <input type="text" name="email" placeholder="Email" />
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="pass" placeholder="Password" />
            </div>
            <div className="button-container">
              <button id="login" class="btn btn-primary" type="submit">Login</button>
            </div>
          </form>
        </div>

      </div>
    </body>
  );

}

export default Login;