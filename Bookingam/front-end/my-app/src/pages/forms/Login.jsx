import React from "react";
// Import the functions you need from the SDKs you need
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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
      <div id="loginForm" class="center">
        <h1>Login Form</h1>
        <form onSubmit={login}>
          <input type="text" name="email" />
          <input type="password" name="pass" />
          <button id="login" class="btn btn-primary" type="submit">Login</button>
        </form>
      </div>
    </body>
  );

}

export default Login;