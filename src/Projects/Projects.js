import React from "react";
import styled from "styled-components";
import ProjectItem from "./ProjectItem";
import unAvailable from "../images/unavailable.png";
import onePropertee from "../images/onepropertee.png";
import innovationLove from "../images/innovationlove.png";

const ProjectsContainer = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectsBody = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 32px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 100%;
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <ProjectsBody>
        <h2>Projects</h2>
        <ProjectList>
          <ProjectItem
            projectTitle="Analytics Dashboard"
            projectClient="Samsung Electronics"
            projectDate="2019"
            projectDescription="The nature of this work is confidential"
            projectSkills={["ReactJS", "JavaScript", "HTML", "CSS"]}
            projectLink="#"
            projectImage={unAvailable}
          ></ProjectItem>
          <ProjectItem
            projectTitle="OnePropertee"
            projectClient="Innovation Love"
            projectDate="2019"
            projectDescription="A Real Estate portal made closely with the country's top sellers"
            projectSkills={["ReactJS", "JavaScript", "HTML", "CSS"]}
            projectLink="https://onepropertee.com/"
            projectImage={onePropertee}
          ></ProjectItem>
          <ProjectItem
            projectTitle="Innovation Love (Website)"
            projectClient="Innovation Love"
            projectDate="2019"
            projectDescription="Company website"
            projectSkills={["ReactJS", "JavaScript", "HTML", "CSS"]}
            projectLink="https://innovationlove.ph/"
            projectImage={innovationLove}
          ></ProjectItem>
          <ProjectItem
            projectTitle="Smart Asset Maintenance"
            projectClient="Accenture"
            projectDate="2018"
            projectDescription="Analytics dashboard for IoT application"
            projectSkills={["SAP UI5", "JavaScript", "CSS"]}
            projectLink="#"
            projectImage={unAvailable}
          ></ProjectItem>
        </ProjectList>
      </ProjectsBody>
    </ProjectsContainer>
  );
};

export default Projects;
