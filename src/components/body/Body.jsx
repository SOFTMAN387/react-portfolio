import React from'react';
import './index.css';
import {Link} from 'react-router-dom';



function Body() {
  return (
    <>
     <div className='container'>
     <div class="row">
    <div class=" col-lg-6 col-md-6 col-12">
        <div className='left-div mt-5'>
        <br></br>
        <h5>Hi There ! I'm</h5>
        <h1>Manish Gupta</h1>
             <div className='animation-box'>
                <div className='animation-box-wrapper'>
                    <div className='animation-item'>Full Stack Developer</div>
                    <div className='animation-item'>MERN Stack Developer</div>
                    <div className='animation-item'>Web Developer</div>
                    <div className='animation-item'>App Developer</div>
                    <div className='animation-item'>Logo Designer</div>

                </div>
              

             </div><br/>
             <div className='desription'>
             <h4>Grow Your Business With SoftMan !</h4>
              <p> Cs/IT Engineer 
             </p>
             <button type="button" class="btn btn-outline-warning font-weight-bold"> <a class="nav-link"  href="/images/resume/mkresume.pdf" target="_er-manish">More Info</a></button>
            
             

             </div>
      



         </div>
         <br></br>
    </div>
    
    <div class="col-lg-6 col-md-6 col-12">
        <div className='right-div ' >
        <div className='clip-path'>
        

            <div className='img-container pt-5 pr-5'>
                <img src="/images/home/w-bg1.png" className='img-fluid' />


            </div>

        </div>

        </div>
    </div>
  </div>

     </div>
    </>
   
  
  );
}

export default Body;
