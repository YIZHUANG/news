import React from "react";

import Loader from "@components/Loader";
import "./SplashScreen.scss";

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <div className="splash-screen__content">
        <div className="splash-screen__brand-container">
          <img alt="my mind" src="../../static/brand-logo.png" />
          <h1 className="splash-screen__app-name">MY MIND</h1>
        </div>
        <Loader />
      </div>
    </div>
  );
};

export default SplashScreen;
