import React from "react";
import { useParams } from "react-router-dom";
import allProjects from "./projectData";

const Projects = () => {
  const { projectID } = useParams();

  return (
    <section id="projects">
      {allProjects.map((project, index) => {
        return project.id.toString() === projectID ? <Project project={project} key={index} /> : "";
      })}
    </section>
  );
};

const Project = ({ project }) => {
  const { name, desc, gitLink, siteLink, images } = project;
  return (
    <div className="project">
      <h1>{name}</h1>
      <p>{desc}</p>
      <div className="project-links">
        <a href={siteLink} target="no_blank" rel="no-referrer">
          <button>View Site</button>
        </a>
        <a href={gitLink} target="no_blank" rel="no-referrer">
          <button>View Code</button>
        </a>
      </div>
      <div className="techStack">
        <p>Made with:</p>
        {project.techStack.map((techStack) => {
          return React.createElement(techStack.icon);
        })}
      </div>
      <div>
        {images.map((img) => (
          <img src={img.src} alt={img.alt} />
        ))}
      </div>
    </div>
  );
};
export default Projects;
