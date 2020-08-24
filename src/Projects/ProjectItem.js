import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ProjectItemContainer = styled.div`
  max-width: 448px;
  width: 100%;
  margin: 16px;
  padding: 16px;
  height: 600px;
  @media only screen and (max-width: 992px) {
    max-width: 100%;
  }
`;

const ProjectImage = styled.div`
  max-width: 100%;
  max-height: 300px;
  height: 100%;
  width: 100%;
  background-image: url(${({ image }) => `${image}`});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-bottom: 16px;
`;

const ProjectItem = ({
  projectTitle,
  projectClient,
  projectDate,
  projectDescription,
  projectSkills,
  projectLink,
  projectImage,
}) => {
  return (
    <ProjectItemContainer>
      <ProjectImage image={projectImage}></ProjectImage>
      <h3>{projectTitle}</h3>
      <i>{projectClient}</i>
      <br></br>
      <small>{projectDate}</small>
      <p>{projectDescription}</p>
      <ul>
        {projectSkills.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
      <a href={projectLink}>Link</a>
    </ProjectItemContainer>
  );
};

ProjectItem.propTypes = {
  projectTitle: PropTypes.string,
  projectClient: PropTypes.string,
  projectDate: PropTypes.string,
  projectDescription: PropTypes.string,
  projectSkills: PropTypes.arrayOf(PropTypes.string),
  projectLink: PropTypes.string,
  projectImage: PropTypes.string,
};

ProjectItem.defaultProps = {
  projectTitle: "Lorem Ipsum",
  projectClient: "Lorem Ipsum",
  projectDate: "Lorem Ipsum",
  projectDescription: "Lorem Ipsum",
  projectSkills: ["lorem", "ipsum"],
  projectLink: "https://github.com/anferneerapio",
  projectImage: "",
};

export default ProjectItem;
