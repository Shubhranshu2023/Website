import React, { useEffect, useRef, useState } from "react";
import workCSS from "./../Projects/Projects.module.css";
import portfolio from "./../../assets/portfolio1.jpg";
import nike from "./../../assets/nike.jpg";
import starbucks from "./../../assets/starbucks.jpg";
import netflix from "./../../assets/netflix.jpg";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef();

  const handleVisibility = () => {
    setIsVisible(true);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          handleVisibility();
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    // Listen for hash change
    const hashChangeListener = () => {
      if (window.location.hash === "#work") {
        handleVisibility();
      }
    };
    window.addEventListener("hashchange", hashChangeListener);

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
      window.removeEventListener("hashchange", hashChangeListener);
    };
  }, []);

  return (
    <>
      <div
        className={`${workCSS.work_wrapper} ${isVisible ? workCSS.visible : ''}`}
        id="work"
        ref={projectsRef}
      >
        <h1 className="title">My Recent Work</h1>
        <p>
          Take a look at some of the projects I've recently developed,
          showcasing my skills in frontend development and design.
        </p>

        <div className={workCSS.work_card_wrapper}>
          <div className={workCSS.work_filter_wrapper}>
            <div className={`${workCSS.filter} ${workCSS.activeFilter}`}>
              <p>All</p>
            </div>
          </div>

          <div className={workCSS.workImages}>
            <a href="https://shubhranshupanda.com">
              <div className={workCSS.workImg}>
                <img src={portfolio} alt="Portfolio" />
              </div>
            </a>
            <a href="https://github.com/Shubhranshu2023/Nike">
              <div className={workCSS.workImg}>
                <img src={nike} alt="Nike" />
              </div>
            </a>
            <a href="https://github.com/Shubhranshu2023/StarBucks">
              <div className={workCSS.workImg}>
                <img src={starbucks} alt="Starbucks" />
              </div>
            </a>
            <a href="https://github.com/Shubhranshu2023/Netflix-Clone">
              <div className={workCSS.workImg}>
                <img src={netflix} alt="Netflix" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
