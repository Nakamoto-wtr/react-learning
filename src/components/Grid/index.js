import React from 'react';
import { stockData } from "../../data";


const grid = () => 

        <div className="grid">
        {stockData.map((data, key) => {
            return (
              <div key = {key}>
                  <p className="gridTitle">{data.company}</p>
        
              </div>
            );
          })}

        </div>


    export default grid;



