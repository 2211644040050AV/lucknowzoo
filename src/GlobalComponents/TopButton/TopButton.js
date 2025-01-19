import React, { useEffect } from "react";
import { BackToTop } from '../TopButton/backToTop';
import '../../styles/buttonStyle.css'

function TopButton() {
  useEffect(() => {
    BackToTop();  // Calling the updated function
  }, []);

  return (
    <>
      <button id="backToTop" className="back-to-top">
        <i className="arrow"></i>
        <i className="arrow"></i>
      </button>
    </>
  );
}

export default TopButton;
