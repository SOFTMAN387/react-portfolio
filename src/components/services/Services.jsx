import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import'./index.css';
import {Link} from 'react-router-dom';


const Services=()=>{
    return(
        <>
        <Navbar/>



         <div class="container">


         <div class='container-fluid mx-auto mt-5 mb-5 col-12' >
    <div class="hd">Why People Believe in Us</div>
    <p><small class="text-muted">Always render more and better service than <br />is expected of you, no matter what your ask may be.</small></p>
    <div class="row" >
        <div class="card col-md-3 col-12">
            <div class="card-content">
                <div class="card-body"> <img class="img img-fluid" style={{width:"130px;",height:"130px"}} src="/images/home/web-applicatios.png" />
                    <div class="shadow"></div>
                    <div class="card-title"> WebApplications </div>
                    <div class="card-subtitle">
                        <p> <small class="text-muted">One of the main reasons you should have a website for your business is to increase your organization's credibility. One way you can stand out is by having a website that looks good and clearly communicates quality information to your consumers.</small> </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card col-md-3 col-12 ml-2">
            <div class="card-content">
                <div class="card-body"> <img class="img img-fluid" style={{width:"150px;",height:"150px"}} src="/images/home/apps.png" />
                    <div class="card-title"> Apps </div>
                    <div class="card-subtitle">
                        <p> <small class="text-muted"> application design has become inevitable to do business and highlighting its online presence in the modern competitive markets. It contains all the information like details of a company, its products or services, contacts, blogs, and much more.</small> </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card col-md-3  col-12 ml-2">
            <div class="card-content">
                <div class="card-body"> <img class="img rck img-fluid" style={{width:"150px;",height:"150px"}} src="/images/home/logo-designs.png" />
                    <div class="card-title"> Logos </div>
                    <div class="card-subtitle">
                        <p> <small class="text-muted">Need your brand intractive in order to People atract more about your related business...</small> </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="card col-md-3  col-12 ml-2">
            <div class="card-content">
                <div class="card-body"> <img class="img rck img-fluid" style={{width:"150px;",height:"150px"}} src="/images/home/seo.png" />
                    <div class="card-title"> SEO </div>
                    <div class="card-subtitle">
                        <p> <small class="text-muted">making  or uploading a softwares are  often the problem to get your websites,youtube videos,apps ranking on server more fast, so that you can be confident in reaching your softwares to customers.</small> </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="card col-md-3  col-12 ml-2">
            <div class="card-content">
                <div class="card-body"> <img class="img rck img-fluid" style={{width:"150px;",height:"150px"}} src="/images/home/digital-marketing.png" />
                    <div class="card-title"> We Guide you </div>
                    <div class="card-subtitle">
                        <p> <small class="text-muted">If you plan on leveraging digital marketing to increase your leads and grow your business, you'll likely want to drive traffic to a website or landing page , so it is best to get your website running early even if you’re not planning on running ads at the moment.</small> </p>
                    </div>
                </div>
            </div>
        </div>

       
        


    </div>
    <div class="ft">
        <p class="chk"><small class="text-muted">Still not sure?</small></p>
      
      <button type="button" class="btn btn-outline-warning  font-weight-bold"> <Link class="nav-link text-dark"  to ="/about" target="_er-manish">Meet My Members</Link></button>
    </div>
</div>









            {/* <div class="row">
                <div class="col"></div>
                <div class="col">col</div>
                <div class="col">col</div>
                <div class="col">col</div>
            </div> */}

        </div>


           
        <Footer/>
        </>
    )
}
export default Services;