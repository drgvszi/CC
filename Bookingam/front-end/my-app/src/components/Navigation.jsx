import React from "react";
import { NavLink } from "react-router-dom";
import "./componentsCSS/navigation.css";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark ">
        <div className="container">

          <NavLink className="navbar-brand" to="/login">
            Bookingam
            <span className="sr-only">(current)</span>
          </NavLink>
          <div class="navClass">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}


export default Navigation;