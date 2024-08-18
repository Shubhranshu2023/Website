import React from "react";
import workCSS from "./../Projects/Projects.module.css";
import portfolio from "./../../assets/portfolio1.jpg";
import nike from "./../../assets/nike.jpg";
import starbucks from "./../../assets/starbucks.jpg";
import netflix from "./../../assets/netflix.jpg";
const Projects = () => {
  return (
    <>
      <div className={workCSS.work_wrapper} id="work">
        <h1 className="title">My Recent Work</h1>
        <p>
        Take a look at some of the projects I've recently developed, showcasing my skills in frontend development and design.
        </p>

        <div className={workCSS.work_card_wrapper}>
          <div className={workCSS.work_filter_wrapper}>
            <div className={`${workCSS.filter} ${workCSS.activeFilter}`}>
              <p>All</p>
            </div>
            <div className={workCSS.filter}>
              <p>Web Development</p>
            </div>
          </div>

          <div className={workCSS.workImages}>
            <div className={workCSS.workImg}>
              <img src={portfolio} alt="" />
            </div>
            <a href="https://github.com/Shubhranshu2023/Nike ">
              <div className={workCSS.workImg}>
                <img src={nike} alt="" />
              </div>
            </a>
            <a href="https://github.com/Shubhranshu2023/StarBucks">
            <div className={workCSS.workImg}>
              <img src={starbucks} alt="" />
            </div>
            </a>
            <a href="https://github.com/Shubhranshu2023/Netflix-Clone">
            <div className={workCSS.workImg}>
              <img src={netflix} alt="" />
            </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
