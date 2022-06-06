import React from "react";
import { NavLink } from "react-router-dom";
import "./componentsCSS/navigation.css";
import { getAuth, signOut } from "firebase/auth";
import { Button } from "react-bootstrap";
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
            <Button onClick={() => window.open( "https://www.paypal.com/donate/?hosted_button_id=D8VF5YS5WCAVE")}
            style={{color:"silver", background: "rgb(29, 30, 31)", boxShadow: "none", border: "0",marginTop:"2px"}}>Donate</Button>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/uploadBook">
                  <div className="navtext">Upload Book</div>
                </NavLink>
              </li>

              
              <li className="nav-item">
                <NavLink className="nav-link" to="/myShelf">
                  <div className="navtext">Favorite Books</div>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/myBooks">
                  <div className="navtext">My Books</div>
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
