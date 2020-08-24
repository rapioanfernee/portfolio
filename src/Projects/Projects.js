import React from "react";
import styled from "styled-components";
import ProjectItem from "./ProjectItem";

const ProjectsContainer = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectsBody = styled.div`
  max-width: 1024px;
  width: 100%;
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
`;

const ProjectList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 128px;
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <ProjectsBody>
        <h2>Projects</h2>
        <ProjectList>
          <ProjectItem></ProjectItem>
          <ProjectItem></ProjectItem>
          <ProjectItem></ProjectItem>
          <ProjectItem></ProjectItem>
        </ProjectList>
      </ProjectsBody>
    </ProjectsContainer>
  );
};

export default Projects;
