import React from "react";
import { stockData } from "../../data";

export const Stocks = () => {
    return (
        <div className = "stocks">
          {stockData.map((data, key) => {
            return (
              <div key={key}>
                {data.company +
                  " , " +
                  data.ticker +
                  " ," +
                  data.stockPrice +
                  ", " +
                  data.timeElapsed}
              </div>
            );
          })}
        </div>   
    );
  };

