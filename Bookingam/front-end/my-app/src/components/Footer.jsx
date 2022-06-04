import React from "react";
import "./componentsCSS/footer.css";

function Footer() {
  return (
    <div className="footer" >
      <footer className=" bg-dark fixed-bottom" >
        <div className="containerFooter">
          <p className="m-0 text-center text-white">
            <div className="navtext">
              Bookingam
            </div>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;