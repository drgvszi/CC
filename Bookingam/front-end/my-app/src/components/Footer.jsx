import React from "react";
import "./componentsCSS/footer.css";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <div className="footer" >
      <footer class="py-1 bg-dark fixed-bottom" >
        <div class="containerFooter">
          <p class="m-0 text-right text-white">
          <NavLink className="nav-link" to="/uploadBook">
                  Upload PDF Book
                </NavLink>
                
          
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;