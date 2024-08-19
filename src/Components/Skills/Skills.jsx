import React, { useEffect, useRef, useState } from 'react';
import skillCSS from './../Skills/Skills.module.css';
import java from './../../assets/java-4.svg';
import html from './../../assets/html-1.svg';
import css from './../../assets/css-3.svg';
import javascript from './../../assets/logo-javascript.svg';
import react from './../../assets/react-2.svg';
import tailwindcss from './../../assets/tailwindcss.svg';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`${skillCSS.Skills_wrapper} ${isVisible ? skillCSS.visible : ''}`}
      id="skills"
      ref={skillsRef}
    >
      <h1 className='title'>My Skills</h1>
      <p>Explore the tools and technologies I use to build efficient and visually appealing web applications.</p>

      <div className={skillCSS.Skills_card_wrapper}>
        <div className={skillCSS.Skills_card}>
          <img src={java} alt="" />
          <h3>92%</h3>
        </div>
        <div className={skillCSS.Skills_card}>
          <img src={html} alt="" />
          <h3>90%</h3>
        </div>
        <div className={skillCSS.Skills_card}>
          <img src={css} alt="" />
          <h3>85%</h3>
        </div>
        <div className={skillCSS.Skills_card}>
          <img src={javascript} alt="" />
          <h3>83%</h3>
        </div>
        <div className={skillCSS.Skills_card}>
          <img src={react} alt="" />
          <h3>80%</h3>
        </div>
        <div className={skillCSS.Skills_card}>
          <img src={tailwindcss} alt="" />
          <h3>87%</h3>
        </div>
      </div>
    </div>
  );
};

export default Skills;
