import React from "react";
import { Stock } from "../Stocks/index.js";
import { stockData } from "../../data";

const grid = () => (
  <div className="container">
    <div className="grid">
      {stockData.map((data, key) => {
        const { company, stockPrice, timeElapsed, image } = data;
        return (
          <div key={key}>
            <Stock
              image={image}
              company={company}
              stockPrice={stockPrice}
              timeElapsed={timeElapsed}
            />
          </div>
        );
      })}
    </div>
  </div>
);

export default grid;
