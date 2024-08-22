import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import styles from "./../AboutMe/About.module.css";

const EducationSlider = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after it's visible
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current);
      }
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div
      className={`${styles.sliderContainer} ${isVisible ? styles.visible : ""}`}
      id="education"
      ref={sliderRef}
    >
      <h1 className='title'>Education</h1>
      {isVisible && (
        <Slider {...settings}>
          <div className={styles.card}>
            <h3 className={styles.title}>B.Tech in Computer Science</h3>
            <p className={styles.details}>
              Gandhi Institute For Technology (2021 - 2025)
            </p>
            <p className={styles.description}>GPA: 7.86/10</p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.title}>Higher Secondary Education</h3>
            <p className={styles.details}>
              Vyasakabi Higher Secondary School (2019 - 2021)
            </p>
            <p className={styles.description}>Percentage: 85.6%</p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.title}>Secondary Education</h3>
            <p className={styles.details}>
              Sartha Kasafal Regional High School (2018 - 2019)
            </p>
            <p className={styles.description}>Percentage: 80%</p>
          </div>
        </Slider>
      )}
    </div>
  );
};

export default EducationSlider;
