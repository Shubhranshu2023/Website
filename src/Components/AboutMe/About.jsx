import React from "react";
import style from './../AboutMe/About.module.css'
import aboutImg from './../../assets/HomeImg.jpg'
const About = () => {
  return (
    <section id="#about" >
      <h2 className={style.aboutMe}>About Me</h2>
      <div className={style.about}>
        <div className={style.aboutImage}>
          <img src={aboutImg} alt="About me" />
        </div>
        <div className={style.aboutContent}>
          <h3>I am Shubhranshu Shekhar Panda</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur quas vero cumque ipsum quaerat fugiat veniam quo laudantium recusandae animi?
          </p>
          <div className={style.aboutBtn}>
            <a href=""><button>Resume</button></a>
          </div>
        </div>
      </div>
    </section>
  )
};

export default About;
