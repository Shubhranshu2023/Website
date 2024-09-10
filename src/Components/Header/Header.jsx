import React, { useEffect, useState, useRef } from "react";
import headerCSS from "./../Header/Header.module.css";
import HeroImg from "./../../assets/HomeImg.jpg";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });
    observer.observe(headerRef.current);
  }, []);

  const whatsAppNumber = "+918093602765";

  return (
    <header id="home" ref={headerRef}>
      <div className={`${headerCSS.hero} ${isVisible ? 'animate' : ''}`}>
        <div className={headerCSS.content}>
          <h3>Hello I am Shubhranshu</h3>
          <h1>Frontend Developer</h1>
          <p>
            Hi, I'm Shubhranshu Shekhar Panda, a frontend developer skilled in
            HTML, CSS, JavaScript, React, and Tailwind CSS. I focus on creating
            responsive and user-friendly web applications. Currently pursuing
            B.Tech, I've gained hands-on experience in improving website
            performance and user experience. Let's connect!
          </p>
          <div className={headerCSS.home_btn}>
            <a
              href={`https://wa.me/${whatsAppNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Hire Me</button>
            </a>
            <div className={headerCSS.social}>
              <a href="https://www.linkedin.com/in/shubhranshu-shekhar-panda-9159b5233/">
                <i
                  className="fa-brands fa-linkedin-in"
                  id={headerCSS.linkedin}
                ></i>
              </a>
              <a href="https://github.com/Shubhranshu2023">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://x.com/ShubhranshPanda">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/shubhranshu143">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className={headerCSS.heroImage}>
          <img src={HeroImg} alt="ProfileImg" />
        </div>
      </div>
    </header>
  );
};

export default Header;
