import React from "react";
// import TwitterLogo from 'assets/twitter.png';
// import SquareLogo from 'assets/square.png';
// import AdobeLogo from 'assets/Adobe-logo.png';

export const Stock = ({company, stockPrice, timeElapsed}) => 
  <div className="stock">
    {/* <img src={Twitterlogo} /> */}
   <p>{company}</p> 
   <p>{stockPrice}</p>  
    {timeElapsed}
  </div> 