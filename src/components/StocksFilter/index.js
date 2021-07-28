import React, { useState } from "react";

const stockData = [
  {
    image: "../facebook.jpeg",
  },
  {
    image: "../JPmorgan.png",
  },
  {
    image: "../TeslaLogo.png",
  },
];

const List = () => {
  const [images, setImages] = useState(stockData);
  const handleRemoveFacebook = () =>
    setImages(
      images.filter((imageObject) => imageObject.image !== "../facebook.jpeg")
    );
  const handleAddFacebook = () =>
    setImages([...images, { image: "../facebook.jpeg" }]);

  return (
    <div>
      <button onClick={handleRemoveFacebook}>Remove facebook</button>
      <button onClick={handleAddFacebook}>Add facebook</button>
      {images.map((data, key) => {
        const { image } = data;

        return (
          <div className="stock" key={key}>
            <img src={image} alt="logo" />
            {/* {image} */}
          </div>
        );
      })}
    </div>
  );
};

export default List;
