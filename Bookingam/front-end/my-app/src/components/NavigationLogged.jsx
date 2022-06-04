import React from "react";
import { NavLink } from "react-router-dom";
import "./componentsCSS/navigation.css";
import { getAuth, signOut } from "firebase/auth";

const signout = async (e) => {
  e.preventDefault();
  const auth = getAuth();
  signOut(auth).then(() => {
    window.location.replace("/");
  }).catch((error) => {
    // An error happened.
    alert(error.code)
    alert(error.message)
  });

}
function NavigationLogged() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Bookingam
            <span className="sr-only">(current)</span>
          </NavLink>
          <div class="navClass">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/uploadBook">
                  UploadBook
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/Account">
                  Account
                </NavLink>
              </li> */}
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/myShelf">
                  My Shelf
                </NavLink>
              </li> */}
              <li className="nav-item">
                <form onSubmit={signout}>
                  <button id="signout" class="btn btn-primary" type="submit">Sign Out</button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavigationLogged;