import React from 'react';
import logo from './images/logo.png';
import { Link } from "react-router-dom";
function Heading() {
    return(

      
<nav class="navbar navbar-expand-md">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={logo} alt="logo"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="float-right" id="navbarCollapse">
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li class="nav-item">
        <Link to="/">Home </Link>
        </li>
        <li class="nav-item">
        <Link to="/about">About Us </Link>
        </li>
        <li class="nav-item">
        <Link to="/contact">contact </Link>
        </li>
        <li class="nav-item">
        <button type="button" class="btn menu">Download App</button>
        </li>
        
       
        
      </ul>
      
     
     
    </div>
  </div>
</nav>



    ) 
}
export default Heading;