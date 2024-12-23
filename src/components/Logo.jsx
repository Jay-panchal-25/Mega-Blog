import React from "react";
import myImage from "../Image/Logo.png";

function Logo(width = "100px") {
  return (
    <>
      <img src={myImage} alt="logo" className="h-16 w-full" />
    </>
  );
}

export default Logo;
