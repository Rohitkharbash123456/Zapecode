import React from 'react';
import './Servicesfinal.css';
import img_5 from './service-icon2.svg';
import img_test from './Untitled-design-2024-07-15T125116.363.webp';
import Myfooter from './Footer';


const ServicesFinal = () => {
 
return (
 <>

<div className="container-fluid container-2 zoom-in-out-boxes">
        <div class="row ">
          <h1>Our Popular Services</h1>
          <p>We Provide Truly Prominent Technology Solutions</p>
        </div>
      </div>

      <div className="container container-3" style={{textAlign:"center", margin:"200px;" }}>
        <div class="row">
        <div class="col-md-4 p-3 services zoom-in-out-box1" style={{ backgroundColor: "#FEBFDA" }}>
            <h4>Website Development</h4>
            <img src={img_5}></img>
            <p>Website Development Company In  <br></br> Hisar </p>
          </div>
          <div class="col-md-4 p-3 services zoom-in-out-box1" style={{ backgroundColor: "#CAC6FD" }}>
            <h4>App Development</h4>
            <img src={img_5}></img>
            <p>Android App Development  Company In <br></br> Hisar</p>
          </div>
          <div class="col-md-4 p-3 services zoom-in-out-box1" style={{ backgroundColor: "#FFE8A4" }}>
            <h4>Digital Marketing</h4>
            <img src={img_5}></img>
            <p>Digital Marketing Services  Company In <br></br> Hisar</p>
          </div>
          <div class="col-md-4 p-3 services zoom-in-out-box1" style={{ backgroundColor: "#D4FFD6" }}>
            <h4>SEO</h4>
            <img src={img_5}></img>
            <p>All Types of SEO Services Company In <br></br> Hisar<br></br><br></br></p>
          </div>
          <div class="col-md-4 p-3 services zoom-in-out-box1" style={{ backgroundColor: "#A6C9F1" }}>
            <h4>Google Adword</h4>
            <img src={img_5}></img>
            <p>For instant business/leads<br /> generation we provide Google<br /> AdWords PPC services.</p>
          </div>
          <div class="col-md-4 p-3 services zoom-in-out-box1" style={{ backgroundColor: "#D2A8F6" }}>
            <h4>Ecommerce Development</h4>
            <img src={img_5}></img>
            <p>Provide all types of ecommerce<br /> website development company<br /> in Hisar.</p>
          </div>
        </div>
      </div>

      <div class="container-6 container-fluid gradient4">
        <div class="row">
          <div class=" col-lg-6 container-6-1 animation1">
            <img src={img_test}></img>
          </div>
          <div class=" col-lg-6 container-6-2 animation2">
            <h6>Customers Feedback</h6>
            <h1>What Says Our Client’s About<br></br> Zapecode</h1>
            <div class="container">
              <div class="row">
                <div class="col-md-12 col-center m-auto">

                  <div id="myCarousel" class="carousel slide" data-ride="carousel">

                    <div class="carousel-inner">
                      <div class="item carousel-item active">

                        <p class="testimonial" style={{ color: "black", fontSize: "16px" }}>One of the best company for the internship program, Go for it. Best android development company in hisar.</p>
                        <p class="overview"><b style={{ color: "black", fontSize: "20px" }}>Ruchi Saini</b><br></br> <span style={{ color: "rgb(20, 20, 20)" }}> Client</span></p>
                      </div>
                      <div class="item carousel-item">

                        <p class="testimonial" style={{ color: "black", fontSize: "16px" }}>One of the best software development company in hisar, amazing staff, nice people, They created our application, which is amazing in city like hisar. Now there is no need to go anywhere else.</p>
                        <p class="overview"><b style={{ color: "black", fontSize: "20px" }}>Madhukar Saini</b><br></br> <span style={{ color: "rgb(20, 20, 20)" }}> Client</span></p>
                      </div>
                      <div class="item carousel-item">

                        <p class="testimonial" style={{ color: "black", fontSize: "16px" }}>They have created our two websites and we are delighted and can say that they are the best development company in hisar. And will definitely work in future together.</p>
                        <p class="overview"><b style={{ color: "black", fontSize: "20px" }}>Yash Soni</b><br></br><span style={{ color: "rgb(20, 20, 20)" }}> Client</span></p>
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" style={{ backgroundColor: "black" }}></span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                      <span class="carousel-control-next-icon" style={{ backgroundColor: "black" }}></span>
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Myfooter/>
      </>

)
 }

 export default ServicesFinal;