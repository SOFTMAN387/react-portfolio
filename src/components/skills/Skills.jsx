import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Skills=()=>{
    return(
        <>
        <Navbar/>

 <div className='container'>
     <div class="row">
    <div class=" col-lg-6 col-md-6 col-12">
    <div className='right-div ' >
           
        

            <div className='img-container pl-5 '>
                <img className="mb-5 " src="/images/home/w-bg3.png"  className='img-fluid' />


            </div>

        

        </div>
        
    </div>
    
    <div class="col-lg-6 col-md-6 col-12">
    <div className="right-div container mt-5">
        <div>
        {/* <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width:"75%"}}></div>
            </div>
        </div> */}
        <h5 className="text-center text-warning ">Skills </h5>

       
           <div>
              <label>HTML/HTML5</label>
              <div class="progress">
               <div class="progress-bar progress-bar-striped" role="progressbar"style={{width:"100%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">HTML/HTML5</div>
                 </div>
           </div><br></br>
           <div>
               <label>C,C++,CSS/CSS3</label>
               <div class="progress">
            <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width:"70%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">CSS/CSS3</div>
            </div>
           </div><br></br>
           
           <div>
               <label>JAVASRIPT</label>
                 <div class="progress">
                 <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width:"60%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">JAVASRIPT</div>
            </div>
           </div><br></br>

           <div>
               <label>Boostrap/Tailwind</label>
               <div class="progress">
                 <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width:"90%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Boostrap/Tailwind</div>
            </div>
           </div><br></br>

           <div>
               <label>MERN (mongoDB,Express js ,React js, Node js ) </label>
               <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width:"75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">MERN</div>
             </div>
           </div><br></br>

          
           
            
          
           
    </div>
    <div>
        <label>Git & Github</label>
    </div>
    <div class="progress">
        <div class="progress-bar" role="progressbar" style={{width:"15%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
        <div class="progress-bar bg-success" role="progressbar" style={{width:"30%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
        <div class="progress-bar bg-info" role="progressbar" style={{width:"20%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </div><br></br>
    <hr></hr>
    <h4>Aditional</h4>
    <div>
    <ol class="list-group list-group-numbered">
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold text-dark"><u>Public Speaking </u></div>
      Talking with people keen my leasure time, in order to make them effective and efficient with their technical/non technical skills    </div>
    <span class="badge bg-primary rounded-pill">1</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold text-dark"><u>Traveling</u></div>
      You probably will agree that even with teachers, textbooks, and supportive fellow students, classroom education is never enough. The real stuff is learned out there. If you want to learn effectively, therefore, you will have to travel the world and discover the things that matter
    </div>
    <span class="badge bg-primary rounded-pill">2</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold text-dark"><u>Dancing</u></div>
      Dance brings together body and mind like a wholesome exercise with numerous health benefits.
    </div>
    <span class="badge bg-primary rounded-pill">3</span>
  </li>
</ol>
    </div>
      
    </div>
  </div>

     </div>










      
           
        <Footer/>
        </>
    )
}
export default Skills;