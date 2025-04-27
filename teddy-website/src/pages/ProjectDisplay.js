import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import SocialActivismIcon from "../assets/SocialActivism.png";
import DevPostIcon from "../assets/DevPost.jpg";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  const socialActivism =
    project.socialActivismLink !== null ? (
      <img src={SocialActivismIcon} alt="SocialActivism" />
    ) : null;
  const devPost =
    project.devPostLink !== null ? (
      <img src={DevPostIcon} alt="Dev Post" />
    ) : null;
  const gitHub =
    project.gitHubLink !== null ? (
      <GitHubIcon style={{color: "#171515" }} alt="GitHub" />
    ) : null;
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt="project" />
      <p>{project.about}</p>
      <p class="skills">
        <b>Skills:</b> {project.skills}
      </p>
      <div className="devPost">
        <a href={project.socialActivismLink}> {socialActivism} </a>
        <a href={project.devPostLink}> {devPost} </a>
        <a href={project.gitHubLink}> {" "} {gitHub} </a>
      </div>
    </div>
  );
}

export default ProjectDisplay;
