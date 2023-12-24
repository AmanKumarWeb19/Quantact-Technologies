import React from "react";
import CredLogo from "../assets/credLogo.png";
import splash_Img from "../assets/splash-image.jpg";
import "./Splashscreen.css";
import cn from "classnames";
const SplashScreen = () => {
  return (
    <div className={cn("p-3 mainScreen")}>
      {/* 1div */}
      <div className="logo">
        <img className="logo-image" src={CredLogo} alt="logo" />
      </div>
      {/* 2div */}
      <div className="image-container">
        <img className="image" src={splash_Img} alt="splash img" />
      </div>
      {/* 3div */}
      <div className="text-container">
        <p className="text">Wlcome to the club</p>
        <h4 className="sectext">make payments.</h4>
        <h4 className="sectext">earn rewards.</h4>
      </div>
    </div>
  );
};

export default SplashScreen;
