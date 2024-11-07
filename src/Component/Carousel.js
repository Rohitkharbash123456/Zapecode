import React from "react";
import './Carousel.css';
import img_cr from './Untitled-design-2024-07-12T153738.368.webp';

function ImageCarousel(){
    return(
        <>
        <div id="carouselExampleControls" class="carousel slide gradient3" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
        <div class="cards-wrapper">
        <div class="card" >
  <img class="card-img-top" src={img_cr} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Kisan Vyapar Grain App</h5>
    
  </div>
</div>
<div class="card" >
  <img class="card-img-top" src={img_cr} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Kisan Vyapar Grain App</h5>
        </div>
      
    </div>
    <div class="card" >
  <img class="card-img-top" src={img_cr} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Kisan Vyapar Grain    <span class="sr-only">Previous</span>
 App</h5>
    </div>
    </div>
    </div>
    </div>
    <div class="carousel-item">
    <div class="cards-wrapper">
        <div class="card" >
  <img class="card-img-top" src={img_cr} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Kisan Vyapar Grain App</h5>
    
  </div>
</div>
<div class="card" >
  <img class="card-img-top" src={img_cr} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Kisan Vyapar Grain App</h5>
        </div>
      
    </div>
    <div class="card" >
  <img class="card-img-top" src={img_cr} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Kisan Vyapar Grain App</h5>
    </div>
    </div>
    </div>
    </div>
    </div>
    
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
        </button>

        
    </div>
        </>
    )
}
export default ImageCarousel;