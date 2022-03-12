import React from'react';

import {Link} from 'react-router-dom';
import './index.css';


function Navbar() {
  return (
    <>
    <div className='container '>
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <h4 ><strong className="fs- text-warning" >S</strong>OFT<span><strong className="fs-3 text-warning">M</strong></span>AN</h4>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
   
      <ul class="navbar-nav  ">
        <li class="nav-item pl-0 ">
          <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/service">Services</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/images/resume/mkresume.pdf" target="_er-manish">Resume</a>
        </li>
       
        <li class="nav-item">
          <Link class="nav-link" to="/skill">Skills</Link>
        </li>
        <li class="nav-item">
        <span>
        <Link class="nav-link " to ="/about">AboutUs</Link>

        </span>
        
        </li>
        <li class="nav-item">
          <Link class="nav-link " to ="/contact">ContactUs</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    
    
     
    </>
   
  
  );
}

export default Navbar;
