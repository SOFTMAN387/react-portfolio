import React from "react";
import Navbar from "../navbar/Navbar";

import './index.css';
import Footer from "../footer/Footer";

///images/home/w-bg1.png
///images/home/IMG_20201009_064401_2.jpg
const About=()=>{
    return(
        <>
        <Navbar/>

    <div className='container'>
      <div class="row">
      <div class=" col-lg-6 col-md-6 col-12">
        <div className='left-div mt-5'>

        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/images/home/mkg.jpg" style={{height:"400px", width:"400px"}} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Er. Manish Gupta</h5>
        <p>Cs/IT Engineer From (Muzaffarpur Institute of Technology,Muzaffarpur) </p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="/images/home/mitd-view.jpeg" style={{height:"400px", width:"400px"}} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>MIT,Muzaffarpur</h5>
        <p>Laxmi Chowk Bihar,Muzaffarpur</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="/images/home/gpp7f.jpeg" style={{height:"400px", width:"400px"}} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Govt. Polytechnic college Patna-7</h5>
        <p>Bihar,patna-800007</p>
      </div>
    </div>
  </div>
 
</div>
            
       </div>
       <br></br>
        
  </div>
    
    <div class="col-lg-6 col-md-6 col-12">
        <div className='right-div ' >
        <div className='clip-path-about'>
        <h3 className="text-center text-warning">Our Team</h3>

        <div class="row">
        <div class="col-6 col-md-6 col-lg-6 col-sm-6 col-12">
                  <div class="card text-center" style={{wid0th:" 18rem;",alignItems:"center"}}>
            <img src="/images/home/ritika.png" className="mx-auto " style={{height:"150px", width:"150px",marginTop:"10px" }} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Ritika singh</h5>
              <p class="card-text">Web Developer</p>
              <p class="card-text">Cs Engineer, From (REC kannauj,Up)</p>
             
            </div>
          </div>
        </div>
        <div class="col-6 col-md-6 col-lg-6 col-sm-6 col-12">
              <div class="card text-center" style={{wid0th:" 18rem;",alignItems:"center"}}>
        <img src="/images/home/Mahesh-raj.jpg" className="rounded mx-auto d-block" style={{height:"150px", width:"150px",marginTop:"10px"}} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Mahesh Raj</h5>
          <p class="card-text">Android App Developer</p>
          <p class="card-text">BCA,From (Science college patna,Bihar)</p>
        
        </div>
    </div>
        </div>
      </div>


      <div class="row">
        <div class="col-6 col-md-6 col-lg-6 col-sm-6 col-12">
        <div class="card text-center " style={{wid0th:" 18rem;",alignItems:"center"}}>
          <img src="/images/home/vikash-mehtha.jpg" className="rounded mx-auto d-block" style={{height:"150px", width:"150px",marginTop:"10px"}} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Vikash Mehta</h5>
            <p class="card-text">Technical Specialist</p>
            <p class="card-text">MCA, From SSC (Aurangabad,Bihar)</p>
           
          </div>
        </div>
        </div>
        <div class="col-6 col-md-6 col-lg-6 col-sm-6 col-12">
        <div class="card text-center aligment-center" style={{wid0th:" 18rem;",alignItems:"center"}}>
          <img src="/images/home/isha-sharma.jpg" className="rounded mx-auto d-block" style={{height:"150px", width:"150px",marginTop:"10px"}} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Isha Sharma</h5>
            <p class="card-text">IT Supporter</p>
            <p class="card-text">Cs Engineer, From (Ambala Institute of Technology Chandigarh,India)</p>
           
          </div>
        </div>
        </div>
      </div>
       

           

        </div>

        </div>
    </div>
  </div>

     </div>










{/* 
        <div className='container'>
     <div class="row">
      <div class=" col-lg-6 col-md-6 col-12">


  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/images/home/IMG_20201009_064401_2.jpg" style={{height:"400px", width:"400px"}} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="/images/home/w-bg1.png" style={{height:"400px", width:"400px"}} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="/images/home/w-bg1.png" style={{height:"400px", width:"400px"}} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>

</div>
 </div>
            
 </div>
       
    </div>
    


   <div className="col-lg-6 col-md-6 col-12">
   <div class="container">
      <div class="row">
        <div class="col">
          1 of 2
        </div>
        <div class="col">
          2 of 2
        </div>
  </div>

   </div>
   




       
 </div>
  

     

          
 */}



        <Footer/>
        </>
    )
}
export default About;