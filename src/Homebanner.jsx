import React from 'react';
import right from './images/right.png';
import gallry from './images/gallry.png';
import gallry1 from './images/gallry1.png';
import gallry2 from './images/gallry2.png';
import gallry3 from './images/gallry3.png';
import oscore from './images/oscore.jpg';
import mobile from './images/mobile.png';
import tab1 from './images/tab1.jpg';

function Homebanner() {
    return(

<div className="container topc">
    <div className="row topbanner">
    <div className="col-md-6">
     <h2>Personalised and<br />
         Tailored data driven<br />
        wellbeing optimisation.</h2>
     <p>Optimus now can provide many health care <br />services virtually (by phone or video), including<br /> behavioral health services and very limited dental <br />services. This is a convenient and safe way to provide <br />care – you do not need to leave your home!

</p>
     <button type="button" class="btn btn-default">Download App</button>
     <button type="button" class="btn btn-default">IOS <i class="fa fa-apple" aria-hidden="true"></i>
</button>
     <button type="button" class="btn btn-default">Android <i class="fa fa-android" aria-hidden="true"></i>
</button>
</div>
<div className="col-md-6 rightimg">

<img src={right} alt="right"/>
</div>
    </div>

    <div className="row topbanner gall">
    <div className="col-md-6">
    <div className="gallery">
    <div className="gallery1"><img className="img1" src={gallry} alt="right"/> <img className="img2" src={gallry1} alt="right"/></div>

    <div className="gallery2"><img className="img1" src={gallry2} alt="right"/> <img className="img2" src={gallry3} alt="right"/></div>

    
    </div>
    </div>
    <div className="col-md-6">
            <p><i class="fa fa-dot-circle-o" aria-hidden="true"></i>
</p>
            <h2>You deserve the <br/>
best you</h2>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
            <button type="button" class="btn btn-default">Who</button>
            <button type="button" class="btn btn-default">What
        </button>
            <button type="button" class="btn btn-default">Why
        </button>


    </div>
        </div>


        <div className="row topbanner score">
    <div className="col-md-3">
    
    <img className="scor1" src={oscore} alt="oscore"/>
    </div>
    <div className="col-md-6">
    <h2>Opimax Score</h2>
    </div>
    <div className="col-md-3">
    <img src={mobile} alt="mobile"/>
    </div>
    <div className="box-1"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</p>
<p><i class="fa fa-arrow-right" aria-hidden="true"></i>Explore</p>

</div>
        </div>
        <div className="row topbanner grid"> 


        <h2>Our Core metrics</h2>
</div>
<div className="row topbanner grid"> 
            <div className="col mx-1">	<div className="box">							
				<div className="icon">
					<div className="image"><i className="fa fa-flag"></i></div>
					<div className="info">
						<h3 className="title">Icons by Font Awesome</h3>
    					<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lobortis nisl, vitae iaculis sapien. Phasellus ultrices gravida massa luctus ornare. Suspendisse blandit quam elit, eu imperdiet neque semper.
						</p>
						<div className="more">
							<a href="#" title="Title Link">
								Read More <i className="fa fa-angle-double-right"></i>
							</a>
						</div>
					</div>
				</div>
				<div className="space"></div>
			</div></div> 
            <div className="col mx-1"> <div className="col mx-1">	<div className="box">							
				<div className="icon">
					<div className="image"><i className="fa fa-flag"></i></div>
					<div className="info">
						<h3 className="title">Icons by Font Awesome</h3>
    					<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lobortis nisl, vitae iaculis sapien. Phasellus ultrices gravida massa luctus ornare. Suspendisse blandit quam elit, eu imperdiet neque semper.
						</p>
						<div className="more">
							<a href="#" title="Title Link">
								Read More <i className="fa fa-angle-double-right"></i>
							</a>
						</div>
					</div>
				</div>
				<div className="space"></div>
			</div></div> </div> 
            <div className="col mx-1"> <div className="col mx-1">	<div className="box">							
				<div className="icon">
					<div className="image"><i className="fa fa-flag"></i></div>
					<div class="info">
						<h3 className="title">Icons by Font Awesome</h3>
    					<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lobortis nisl, vitae iaculis sapien. Phasellus ultrices gravida massa luctus ornare. Suspendisse blandit quam elit, eu imperdiet neque semper.
						</p>
						<div className="more">
							<a href="#" title="Title Link">
								Read More <i className="fa fa-angle-double-right"></i>
							</a>
						</div>
					</div>
				</div>
				<div class="space"></div>
			</div></div> </div> 
            <div className="col mx-1"> <div className="col mx-1">	<div class="box">							
				<div className="icon">
					<div className="image"><i className="fa fa-flag"></i></div>
					<div className="info">
						<h3 class="title">Icons by Font Awesome</h3>
    					<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lobortis nisl, vitae iaculis sapien. Phasellus ultrices gravida massa luctus ornare. Suspendisse blandit quam elit, eu imperdiet neque semper.
						</p>
						<div className="more">
							<a href="#" title="Title Link">
								Read More <i className="fa fa-angle-double-right"></i>
							</a>
						</div>
					</div>
				</div>
				<div className="space"></div>
			</div></div> </div> 
            
        </div> 
        <div className="row topbanner gall">
        <div className="col-md-6">
           
            <h2>Expert coches</h2>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                 </p>
                 <div>
            <button type="button" class="btn btn-default">Fitness</button>
            <button type="button" class="btn btn-default">Nutrition</button>
            <button type="button" class="btn btn-default">Life Coach</button>

        </div>
      
       

    </div>
    <div className="col-md-6">
    <img className="img1" src={tab1} alt="right"/>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                 </p>
    </div>
   
        </div>
</div>
    ) 
}
export default Homebanner;