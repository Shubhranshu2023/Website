import React, { useRef } from "react";
import navCSS from "./../Nav/Nav.module.css";
import logo from "./../../assets/logo.png";
import resume from "./../../Resume/Shubhranshu_Shekhar_Panda_Resume.pdf";

const Nav = () => {
  const menu = useRef();
  const Showmenu = () => {
    menu.current.classList.toggle(navCSS.active);
  };

  return (
    <nav>
      <div className={navCSS.nav}>
        <div className={navCSS.logo}>
          <img src={logo} alt="logo" />
        </div>

        <ul ref={menu}>
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
          <a href={resume} download="Shubhranshu_Shekhar_Panda_Resume.pdf">
            <button>Resume</button>
          </a>
        </ul>

        <i className="ri-bar-chart-horizontal-line" onClick={Showmenu}></i>
      </div>
    </nav>
  );
};

export default Nav;
