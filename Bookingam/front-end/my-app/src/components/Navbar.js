import React from 'react';
import "./navbar.css"
import {  Link } from "react-router-dom";
const Navbar= () =>{
  return (
		<header class="header">
		
  <div class="mid">
		<ul class="navbar">
			 <li>
      <Link to="/">Home</Link>
       </li>
        <li>
          <Link to="/horror">Horror</Link>
        </li>
    <li>
      <Link to="/romance">Romance</Link>
    </li>

    <li>
      <Link to="/action">Action</Link>
    </li>

    <li>
      <Link to="/adventure">Adventure</Link>
    </li>

    <li>
      <Link to="/comic">Comic</Link>
    </li>
    <li>
      <Link to="/fantasy">Fantasy</Link>
    </li>

    <li>
      <Link to="/crime">Crime</Link>
    </li>
		</ul>
   
  </div>


    </header>
  );
}
export default Navbar;