import React from "react";

export const Stock = ({company, stockPrice, timeElapsed}) => 
  <div className="stock">
    {company}
    {stockPrice}
    {timeElapsed}
  </div> 