import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ProjectItemContainer = styled.div`
  max-width: 448px;
  width: 100%;
  margin: 16px;
  padding: 16px;
`;

const ProjectItem = ({
  projectTitle,
  projectDate,
  projectDescription,
  projectSkills,
  projectLink,
}) => {
  return (
    <ProjectItemContainer>
      <h3>{projectTitle}</h3>
      <small>{projectDate}</small>
      <p>{projectDescription}</p>
      <ul>
        {projectSkills.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
      <a href={projectLink}>Repository Link</a>
    </ProjectItemContainer>
  );
};

ProjectItem.propTypes = {
  projectTitle: PropTypes.string,
  projectDate: PropTypes.string,
  projectDescription: PropTypes.string,
  projectSkills: PropTypes.arrayOf(PropTypes.string),
  projectLink: PropTypes.string,
};

ProjectItem.defaultProps = {
  projectTitle: "Lorem Ipsum",
  projectDate: "Lorem Ipsum",
  projectDescription: "Lorem Ipsum",
  projectSkills: ["lorem", "ipsum"],
  projectLink: "https://github.com/anferneerapio",
};

export default ProjectItem;
