import React from "react";
import TwitterLogo from "../../../assets/twitter.png";
import AdobeLogo from "../../../assets/Adobe-Logo.png";
import ShopifyLogo from "../../../assets/shopify.png";
import SquareLogo from "../../../assets/square.png";
import SunrunLogo from "../../../assets/Sunrun-Logo.png";

const TestImages = () => {
  return (
    <div className="imageTest">
      <img src={TwitterLogo} alt="Twitter logo" />
      <img src={AdobeLogo} alt="Adobe Logo" />
      <img src={ShopifyLogo} alt="Shopify Logo" />
      <img src={SquareLogo} alt="Square Logo" />
      <img src={SunrunLogo} alt="Twitter logo" />
    </div>
  );
};

export default TestImages;
