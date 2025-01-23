import React from "react";

export default function Footer() {
  const footerStyle = {
    paddingTop: "20px",
    paddingBottom: "20px",
    textAlign: "center",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#04560b",
    margin: "0 5px",
  };

  const copyrightStyle = {
    fontFamily: "Trebuchet MS, sans-serif",
    fontSize: "14px",
    color: "#7e3809",
    paddingTop: "10px",
  };

  return (
    <div style={footerStyle}>
      <a href="Index.html" style={linkStyle}>
        Home
      </a>
      |
      <a href="Contact Us.html" style={linkStyle}>
        Contact Us
      </a>
      |
      <a href="Rules.html" style={linkStyle}>
        Rules & Regulation
      </a>
      |
      <a href="Visiting Hours.html" style={linkStyle}>
        Visiting Hours
      </a>
      |
      <a href="Entry Fee.html" style={linkStyle}>
        Entry Fees
      </a>
      <br />
      <div style={copyrightStyle}>
        Best Viewed at 1024 x 768 | Copyright &copy; 2023 All Rights Reserved |
        Site created by SKARTIA Computers
      </div>
    </div>
  );
}
