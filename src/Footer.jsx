import React from 'react';
import logo from './images/logo.png';

function Footer() {
    return(

      
<div>
<footer className="footer">
{/* <div className="row">
    <ul><li><i class="fa fa-facebook"></i></li>
        <li><i class="fa fa-linkedin"></i></li>
    <li><i class="fa fa-twitter"></i></li>
    <li><i class="fa fa-skype"></i></li>
    <li><i class="fa fa-pinterest"></i></li></ul>
</div> */}
    <div className="row">

    <div className="col-md-3 footer1">

    <a class="navbar-brand" href="#"><img src={logo} alt="logo"/></a>
    <p>© Copyright 2021. All rights reserved</p>
</div>
<div className="col-md-3 footer2">

<h2>Company</h2>
<ul>
    <li>About</li>
    <li>Our Team</li>
    <li>Contact Us</li>
</ul>
</div>
<div className="col-md-3 footer3">

<h2>Legals</h2>
<ul>
    <li>About</li>
    <li>Our Team</li>
    <li>Contact Us</li>
</ul>
</div>
<div className="col-md-3 footer4">

<h2>Socials</h2>
<ul><li><i class="fa fa-facebook"></i></li>
        <li><i class="fa fa-linkedin"></i></li>
    <li><i class="fa fa-twitter"></i></li>
    <li><i class="fa fa-skype"></i></li>
    <li><i class="fa fa-pinterest"></i></li></ul>
</div>
    </div>
</footer>
    
</div>



    ) 
}
export default Footer;