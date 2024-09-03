import React from "react";
import styles from "./ProjectsStyles.module.css";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <a href="">
          <img className="hover" src="" alt="" />
          <h3>Project 1</h3>
        </a>
        <a href="">
          <img className="hover" src="" alt="" />
          <h3>Project 2</h3>
        </a>
        <a href="">
          <img className="hover" src="" alt="" />
          <h3>Project 3</h3>
        </a>
      </div>
    </section>
  );
}

export default Projects;
