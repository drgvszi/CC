import React from "react";
import { NavLink } from "react-router-dom";
import "./componentsCSS/navigation.css";
function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/myShelf">
            My Shelf
          </NavLink>
          <div class="navClass">
            <ul className="navbar-nav ml-auto">
              
              
              <li className="nav-item">
                <NavLink className="nav-link" to="/adventure">
                  Adventure
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/action">
                  Action
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/romance">
                  Romance
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/horror">
                  Horror
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/fiction">
                  Fiction
                </NavLink>
              </li>




              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                
              </li> 
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;