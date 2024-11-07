import React from "react";

import './Homefinal.css';
import img_1 from './about-img1-689x1024.webp';
import img_2 from './Untitled-design-2024-07-23T134818.465.webp';
import img_3 from './elements5.webp';
import img_4 from './about-img2.webp';
import img_5 from './service-icon2.svg';
import img_exp from './8-Years-of-Experiences-1.webp';
import img_test from './Untitled-design-2024-07-15T125116.363.webp';
import main from './7040859.jpg';
import img_cr from './Untitled-design-2024-07-12T153738.368.webp';
import video_1 from './Untitled design.mp4';
import ToggleParagraphs from "./Para";
import MyForm from "./Myform";
import image_12 from './elements2.webp';
import image_13 from './header-author-img2.webp'
import image_14 from './sound-icons1.svg';
import image_15 from './elements3.webp';
import image_16 from './header-author-img1.webp';
import image_17 from './lite-icons1.svg';

function Newhome() {
  return (
    <>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
 <a class="navbar-brand" href="#">Zapecode</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar" aria-expanded = "false" aria-label = "Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#">About Us</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#">Contact Us</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#">Our Products</a>
        </li>
      </ul>
     </div>
  </nav>
      <div className="main container">
        <div class="row">
          <div class="col-lg-5 main-1">
            <h6>
              Welcome to Zapecode Private Limited</h6>
            <h1>Best IT Solution Company In Global Community</h1>
            <p>Top Website Design And Development Company in Hisar, Haryana,India.</p>
            <button>Contact Us</button>
            <button>Know More</button>
          </div>
          <div class="col-lg-7 main-2">
           <img class= "image1" src= {main}></img>
           <img class="image2" src= {image_12} style={{height:"100px", width:"130px"}}></img>
           <img class="image3 zoom-in-out-box" src= {image_13} style={{height:"100px", width:"130px"}}></img>
           <img class="image4 zoom-in-out-box" src= {image_14} style={{height:"100px", width:"130px"}}></img>
           <img class="image5" src= {image_15} style={{height:"100px", width:"130px"}}></img>
           <img class="image6 zoom-in-out-box" src= {image_16} style={{height:"220px", width:"250px"}}></img>
           <img class="image7 zoom-in-out-box" src= {image_17} style={{height:"100px", width:"130px"}}></img>
          </div>
        </div>
      </div>

      <div class="container-2 grad1">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-4 part-2-1">
              <img src={img_1} class="zoom-in-out-img1"></img>
            </div>
            <div class="col-lg-4   part-2-2">
              <img class="rotate linear infinite" src={img_2}></img>
              <h1>Improve and Innovate The ZapeCode Trends.</h1>
              <p>We formed a website design and development company under the name of ZapeCode PVT. LTD.
                in 2021 at Hisar( 125001), Haryana, India. ZapeCode PVT. LTD. is largely regarded in the
                assiduity and is a step ahead of the top website design and development company. We’ve
                good platoon moxie in UI/ UX Design, Application Development, Web Design, and Development,
                Digital Marketing and all other IT services. Our main focus is to develop and vend your
                products or services which can take you to the moon.</p>
              <button>Click Here</button>
            </div>
            <div class="col-lg-4  part-2-3">
              <img class="rotate linear infinite" src={img_3} style={{ padding: "50px", marginLeft: "50px", height: "250px", display: "block" }}></img>
              <img class="zoom-in-out-img1" src={img_4} style={{ marginTop: "-120px" }}></img>
            </div>
          </div>
        </div>
      </div>

      <div className="container-2">
        <div class="row ">
          <h1>Our Popular Services</h1>
          <p>We Provide Truly Prominent Technology Solutions</p>
        </div>
      </div>

      <div className=" container-9  ">
        <div class="row">
        <div class="col-md-4 p-3 services zoom-in-out-box1" style={{ backgroundColor: "#FEBFDA" }}>
            <h5>Website Development</h5>
            <img src={img_5}></img>
            <p>Website Development <br />Company In   hisar </p>
          </div>
          <div class="col-md-4 p-3 services zoom-in-out-box1" style={{ backgroundColor: "#CAC6FD" }}>
            <h5>App Development</h5>
            <img src={img_5}></img>
            <p>Android App Development <br /> Company In hisar</p>
          </div>
          <div class="col-md-4 p-3 services zoom-in-out-box1" style={{ backgroundColor: "#FFE8A4" }}>
            <h5>Digital Marketing</h5>
            <img src={img_5}></img>
            <p>Digital Marketing Services <br /> Company In hisar</p>
          </div>
          <div class="col-md-4 p-3 services zoom-in-out-box1" style={{ backgroundColor: "#D4FFD6" }}>
            <h5>SEO</h5>
            <img src={img_5}></img>
            <p>All Types of SEO Services <br /> Company In hisar</p>
          </div>
          <div class="col-md-4 p-3 services zoom-in-out-box1" style={{ backgroundColor: "#A6C9F1" }}>
            <h5>Google Adword</h5>
            <img src={img_5}></img>
            <p>For instant business/leads<br /> generation we provide Google<br /> AdWords PPC services.</p>
          </div>
          <div class="col-md-4 p-3 services zoom-in-out-box1" style={{ backgroundColor: "#D2A8F6" }}>
            <h5>Ecommerce Development</h5>
            <img src={img_5}></img>
            <p>Provide all types of ecommerce<br /> website development company<br /> in Hisar.</p>
          </div>
        </div>
      </div>

      <div class="container-5">
        <div class="row">
          <div class="col-md-6 container-5-1">
            <img src={img_exp}></img>
          </div>
          <div class="col-md-6 container-5-2">
            <h4  class="os">OUR SPECIALTY</h4>
            <h1>Ready Services For You</h1>
            <p>We aim to meet our customer’s prospects and win the trust. therefore,
              our largely professed Web Development platoon of professionals leave no
              gravestone unturned to understand our guests ’ Conditions and docket before
              proposing exclusive designing, development, marketing strategies Our concentrated
              approach fosters innovative and sustainable service for our guests.</p>
            <div class="small-1 zoom-in-out-img1">
              <h1>95%</h1>
              <h4>Analytics</h4>
            </div>
            <div class="small-1 zoom-in-out-img1">
              <h1>75%</h1>
              <h4>Development</h4>
            </div>
            <div class="small-1 zoom-in-out-img1">
              <h1>85%</h1>
              <h4>Solutions</h4>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid container-6 grad2" style={{ backgroundColor: "rgb(15, 15, 15)" }}>
        <div class="row">
          <div class="col-lg-6">
            <h1>Our Some Finest Projects</h1>
          </div>
          <div class="col-lg-6 ">
            <button>Mobile App</button>
            <button>Product Design</button>
            <button>Web Design</button>
          </div>
        </div>
      </div>

      <div id="demo" class="carousel slide grad2" data-bs-ride="carousel">

        <div class="carousel-indicators goup">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active" style={{ backgroundColor: "black" }}></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1" style={{ backgroundColor: "black" }}></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2" style={{ backgroundColor: "black" }}></button>
        </div>

        <div class="carousel-inner goup">
          <div class="carousel-item active">
            <img src={img_cr} alt="Los Angeles" class="d-block" style={{ width: "40%", height: "400px", padding: "50px", margin: "auto" }} />
            <div class="carousel-caption" style={{ color: "black" }}>
              <h3>Kisan Vyapar Grain App</h3>

            </div>
          </div>
          <div class="carousel-item goup">
            <img src={img_cr} alt="Chicago" class="d-block" style={{ width: "40%", height: "400px", padding: "50px", margin: "auto" }} />
            <div class="carousel-caption" style={{ color: "black" }}>
              <h3>Kisan Vyapar Grain App</h3>

            </div>
          </div>
          <div class="carousel-item">
            <img src={img_cr} alt="New York" class="d-block" style={{ width: "40%", height: "400px", padding: "50px", margin: "auto" }} />
            <div class="carousel-caption" style={{ color: "black" }}>
              <h3>Kisan Vyapar Grain App</h3>

            </div>
          </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" style={{ backgroundColor: "black" }}></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span class="carousel-control-next-icon" style={{ backgroundColor: "black" }}></span>
        </button>
      </div>








      <div class="container-7 grad3">
        <div class="row">
          <div class=" col-lg-6 container-7-1">
            <img src={img_test}></img>
          </div>
          <div class=" col-lg-6 container-7-2">
            <h5>Customers Feedback</h5>
            <h1>What Says Our Client’s About<br></br> Zapecode</h1>
            <div class="container-fluid">
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
<ToggleParagraphs/>
<div class=" container container-8" style={{backgroundColor:"aqua"}}>
<h1>Get In Touch With Us Today</h1>
<div class="row">
  <div class="col-md-5 container-8-1">
    <h2>Contact Us</h2>
  </div>
  <div class="col-md-5 container-8-2">
    <h6>LET'S TALK</h6>
    <h3>Speak With Engineers.</h3>
    <MyForm/>
  </div>
</div>
</div>

       



       

    </>
  );
}
export default Newhome;
