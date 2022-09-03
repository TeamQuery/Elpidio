import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const NavbarHome = () =>{


  return (
   
     <nav className="navbar ">
    <div class="container-fluid">
      
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
          aria-expanded="false"
        

        >
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
         <a class="navbar-brand" href="Home.html">
          Logo 
        </a> 
       
      </div>

      <div
        class="collapse navbar-collapse"
        id="bs-example-navbar-collapse-1"
      >
        <ul class="nav navbar-nav navbar-right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About Us</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
          <li>
            <Link to="/Contacts">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav> 
  
  );
}

export default NavbarHome;
