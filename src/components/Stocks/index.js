import React from "react";


export const Stock = ({ company, stockPrice, timeElapsed, image }) => (
  <div className="stock">
    <img src={image} alt="Logo" />
    <p>{company}</p>
    <p>{stockPrice}</p>
    {timeElapsed}
  </div>
);
