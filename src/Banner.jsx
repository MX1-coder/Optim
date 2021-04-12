import React from 'react';
import pic from './images/banner1.jpg';
import pic1 from './images/banner2.jpg';


function Banner() {
    return(

<div><main>

<div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src={pic} alt="mypic"/>

      {/* <div className="container">
        <div className="carousel-caption text-start">
          <h1>Example headline.</h1>
          <p>Some representative placeholder content for the first slide of the carousel.</p>
          <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
        </div>
      </div> */}
    </div>
    <div className="carousel-item">
    <img src={pic1} alt="mypic"/>
{/* 
      <div className="container">
        <div className="carousel-caption">
          <h1>Another example headline.</h1>
          <p>Some representative placeholder content for the second slide of the carousel.</p>
          <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
        </div>
      </div> */}
    </div>
    <div className="carousel-item">
    <img src={pic} alt="mypic"/>
      <div className="container">
        <div className="carousel-caption text-end">
          <h1>One more for good measure.</h1>
          <p>Some representative placeholder content for the third slide of this carousel.</p>
          <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
        </div>
      </div>
    </div>
  </div>
  
</div>





</main>


</div>

    ) 
}
export default Banner;