import React from "react";
import './Services.css';
import img_5 from './service-icon2.svg';
import img_test from './Untitled-design-2024-07-15T125116.363.webp';
const Service = () => {
    return(
        <>
        <div class="container-2">
            <h1>Our Popular Services</h1>
            <p>We Provide Truly Prominent Technology Solutions</p>
        </div>

        <div class="container container-3">
        <div class="part-3-1" style= {{backgroundColor:"pink"}}>
            <h5>Website Development</h5>
            <img src={img_5}></img>
            <p>Website Development company  <br/> in Hisar</p>
        </div>
        
        <div class="part-3-1" style= {{backgroundColor:"rgb(229, 229, 241)"}}>
            <h5>App Development</h5>
            <img src={img_5}></img>
            <p>Android App Development <br/> Company In hisar</p>
        </div>
        <div class="part-3-1"  style= {{backgroundColor:"rgb(220, 220, 136)"}}>
            <h5>Digital Marketing</h5>
            <img src={img_5}></img>
            <p>Digital Marketing Services <br/> Company In hisar</p>
        </div>


        

        
        <div class="part-3-1"  style= {{backgroundColor:"rgb(221, 223, 163)"}}>
            <h5>SEO</h5>
            <img src={img_5}></img>
            <p>All Types of Seo Services <br/>Company in Hisar<br/><br/></p>
        </div>
        
        <div class="part-3-1"  style= {{backgroundColor:"rgb(198, 198, 215)"}}>
            <h5>Google Adword</h5>
            <img src={img_5}></img>
            <p>For instant business/leads<br/> generation we provide Google<br/> AdWords PPC services.</p>
        </div>
        <div class="part-3-1"  style= {{backgroundColor:"rgb(229, 229, 241)"}}>
            <h5>Ecommerce Development</h5>
            <img src={img_5}></img>
            <p>Provide all types of ecommerce<br/> website development company<br/> in Hisar.</p>
        </div>
         </div>

         <div class="container-6">
            <div class="part-6-1">
            <img src={img_test}></img>
            </div>
            <div class="part-6-2">
            <h5>Customers Feedback</h5>
            <h1>What Says Our Client’s About Zapecode</h1>
            
            </div>
        </div>
        </>
    );
}
export default Service;