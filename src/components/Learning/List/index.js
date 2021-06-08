import React, { useState } from "react";
const stockData = [
  {
    image: "../facebook.jpeg",
    price:"£0.99p",
  },
  {
    image: "../JPmorgan.png",
    price:"£0.79p",
  },
  {
    image: "../TeslaLogo.png",
    price:"£1.99p",
  },
];
const List = () => {
  const [images, setImages] = useState( stockData );

  const handleRemoveFacebook = () => setImages(images.filter(imageObject => imageObject.image !== "../facebook.jpeg"));

  const handleAddFacebook = () => setImages([...images, { image: "../facebook.jpeg" }]);


  const handleRemoveTesla = () => setImages(images.filter(imageObject => imageObject.image !== "../TeslaLogo.png"));

  const handleAddTesla = () => setImages([...images, { image: "../TeslaLogo.png" }]);

  return (
    <div className = "testlearn">
      <button onClick={handleRemoveFacebook}>Remove facebook</button>
      <button onClick={handleAddFacebook}>Add facebook</button>

      <button onClick={handleRemoveTesla}>Remove Tesla</button>
      <button onClick={handleAddTesla}>Add Tesla</button>

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
    </div>
  );
};



export default List;


