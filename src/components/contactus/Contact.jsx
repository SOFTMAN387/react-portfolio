import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import './index.css'

const Contact=()=>{
    return(
        <>
           <Navbar/>
           <div className='container'>
     <div class="row">
    <div class=" col-lg-6 col-md-6 col-12">
    <div className='right-div ' >
           
        

            <div className='img-container pl-5 mt-5 '>
                <img className="mb-5 " src="/images/home/w-bg1.png"  className='img-fluid' />


            </div>

        

        </div>
        
    </div>
    
    <div class="col-lg-6 col-md-6 col-12">
                    <section class="get-in-touch">
                <h1 class="title ">Get in touch</h1>
                <form class="contact-form row">
                    <div class="form-field col-lg-6">
                        <input id="name" class="input-text js-input" type="text" required />
                        <label class="label" for="name">Name</label>
                    </div>
                    <div class="form-field col-lg-6 ">
                        <input id="email" class="input-text js-input" type="email" required />
                        <label class="label" for="email">E-mail</label>
                    </div>
                    <div class="form-field col-lg-6 ">
                        <input id="company" class="input-text js-input" type="text" required />
                        <label class="label" for="company">Purpose</label>
                    </div>
                    <div class="form-field col-lg-6 ">
                        <input id="phone" class="input-text js-input" type="text" required />
                        <label class="label" for="phone">Contact Number</label>
                    </div>
                    <div class="form-field col-lg-12">
                        <input id="message" class="input-text js-input" type="text" required />
                        <label class="label" for="message">Message</label>
                    </div>
                    <div class="form-field col-lg-12">
                        <input class="submit-btn" type="submit" value="Submit" />
                    </div>
                </form>
                </section>

    </div>

    </div>

    </div>



           


        <Footer/>
        </>
    )
}
export default Contact;