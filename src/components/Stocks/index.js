import React from "react";
// import TwitterLogo from '../../assets/twitter.png';

export const Stock = ({ company, stockPrice, timeElapsed, image }) => (
  <div className="stock">
    <img src={image} alt="Logo" />
    <p>{company}</p>
    <p>{stockPrice}</p>
    {timeElapsed}
  </div>
);
