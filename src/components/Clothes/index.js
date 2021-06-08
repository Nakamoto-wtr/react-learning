import React, { useState } from "react";
import "./App.css";
// import ExpenseData from './ExpenseDate';
// inport Card from '../UI/Card';

// const clothesData = [
//   {
//     image: "../facebook.jpeg",
//     price:"£0.99p",
//   },
//   {
//     image: "../JPmorgan.png",
//     price:"£0.79p",
//   },
//   {
//     image: "../TeslaLogo.png",
//     price:"£1.99p",
//   },
// ];


const Clothes= (props) => {
//Function clickHandler() {}
  const [title, setTitle] = useState( props.title );

  const clickHandler = () => {
      setTitle('Updated!');
      console.log(title);  
    };


  return (
    <Card className = "clothes">
      {images.map((data, key) => {
        const { image, price } = data;
        return (
            <div key={key}>
            <img src ={image} alt = "logo"/>
            <p>{price}</p>
            {/* {image} */}
            </div>
        );
      })}
    </Card>
  );
};



export default Clothes;


