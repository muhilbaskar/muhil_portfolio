import React from 'react';
import styles from './ProjectsStyles.module.css';
import E_commerce from '../../assets/project-1.png';
import freshBurger from '../../assets/project-2.png';
import taskManager from '../../assets/project-3.png';
import hipsster from '../../assets/hipsster.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <>
      <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
          <ProjectCard
            src={E_commerce}
            link="https://github.com/muhilbaskar?tab=repositories"
            h3="E-Commerce"
            p="E-Commerce Website"
          />
          <ProjectCard
            src={freshBurger}
            link="https://github.com/muhilbaskar?tab=repositories"
            h3="Fresher Burger"
            p="Restaurant Application"
          />
          <ProjectCard
            src={taskManager}
            link="https://github.com/muhilbaskar?tab=repositories"
            h3="Task Manager"
            p="MERN Stack Application"
          />
          <ProjectCard
            src={hipsster}
            link="https://github.com/muhilbaskar?tab=repositories"
            h3="Hipsster"
            p="Glasses Shop"
          />
        </div>
      </section>
    </>
  );
}

export default Projects;
