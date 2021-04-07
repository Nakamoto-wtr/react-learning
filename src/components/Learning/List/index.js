import React, { useState } from "react";
import { stockData } from "../../../data";

const list = () => (
    <div>
      {stockData.map((data, key) => {
        const { image } = data;
        const arr = [image];
        arr.image = useState ({

        });

        return (
            <div key={key}>
            {/* <img src ={image} alt = "logo"/> */}
            {image}
            </div>
        );
      })}
    </div>
 
);

export default list;