import React from "react";
import footerCSS from "./../Footer/Footer.module.css";
import logo from "./../../assets/logo.png";
const Footer = () => {
  return (
    <footer>
      <div className={footerCSS.footer_wrapper}>
        <img src={logo} alt="logo" />

        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#work">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <p>All rights reserved @ Shubhranshu Shekhar Panda 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
