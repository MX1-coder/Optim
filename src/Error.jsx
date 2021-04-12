import React from "react";
import error from './images/404.png';

const Error = () => {

    return    <div className="App"> 
    <img src={error} alt="404"/>
    <div class="text">
		<h1>The requested url was not found !...</h1>
		
		<p>Sorry!Evidently the document you were looking for has either been moved or no longer exist,,</p>
	</div>
    
  </div>
};

export default Error;
