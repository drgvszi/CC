import React from "react";
// Import the functions you need from the SDKs you need
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "../pagesCSS/login_register.css";

const register = async (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.pass.value;
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("welcome");
    })
    .catch((error) => {
      alert(error.code);
    });
};

function Register() {
  return (
    <body>
      <div className="form">
        <div id="registerForm" class="center">
          <h1>Register</h1>
          <form onSubmit={register}>
            <div className="input-container">
              <label>Email </label>
              <input type="text" name="email" placeholder="Email" />
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="pass" placeholder="Password" />
            </div>
            <div className="button-container">
              <button id="register" class="btn btn-primary" type="submit">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </body>
  );
}

export default Register;
