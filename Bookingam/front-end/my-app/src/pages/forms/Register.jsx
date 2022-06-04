import React from "react";
// Import the functions you need from the SDKs you need
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const register = async (e) => {
  e.preventDefault();
  const email = e.target.email.value
  const password = e.target.pass.value
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("welcome")
    })
    .catch((error) => {
      alert(error.code)
    });

}

function Register() {
  return (
    <body>
      <div id="registerForm" class="center">
        <h1>Register Form</h1>
        <form onSubmit={register}>
          <input type="text" name="email" />
          <input type="password" name="pass" />
          <button id="register" class="btn btn-primary" type="submit">Register</button>
        </form>
      </div>
    </body>
  );

}

export default Register;