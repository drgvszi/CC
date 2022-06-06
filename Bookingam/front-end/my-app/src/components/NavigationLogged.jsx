import React from "react";
import { NavLink } from "react-router-dom";
import "./componentsCSS/navigation.css";
import { getAuth, signOut } from "firebase/auth";

const NavigationLogged = () => {
  const signout = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        window.location.replace("/login");
      })
      .catch((error) => {
        // An error happened.
        alert(error.code);
        alert(error.message);
      });
  };

  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark ">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <div className="navtext">Bookingam</div>
            <span className="sr-only">(current)</span>
          </NavLink>
          <div className="navClass">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/uploadBook">
                  <div className="navtext">UploadBook</div>
                </NavLink>
              </li>

              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/Account">
                  Account
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/myShelf">
                <div className="navtext">My Shelf</div>
                </NavLink>
              </li>
              <li className="nav-item">
                <form onSubmit={signout}>
                  <button id="signout" class="btn btn-primary" type="submit">
                    Sign Out
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationLogged;
