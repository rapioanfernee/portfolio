import React from "react";
import styled from "styled-components";
import ExperienceTile from "./ExperienceTile";

const ExperienceBackground = styled.div`
  background: transparent;
  color: white;
  text-align: center;
  padding: 32px;
  @media only screen and (max-width: 992px) {
    h2 {
      margin-bottom: 64px;
    }
  }
`;

const ExperienceBody = styled.div`
  max-width: 1024px;
  min-height: 75vh;
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-evenly;
`;

const Experiences = [
  {
    company: "Samsung Research and Development Philippines",
    title: "Software Engineer",
    date: "November 2019 - Present",
    desc: [
      "Developed and enhanced a dashboard web application using ReactJS for network analytics",
      "Created unit tests for multiple chart components and documented usage usingStorybook and React Styleguidist",
      "Created and published a local library of charts based on Highcharts.js to the company’s internal NPM library",
    ],
  },
  {
    company: "Innovation Love",
    title: "Front-End Developer",
    date: "July 2019 - October 2019",
    desc: [
      "Enhanced and developed a web application using ReactJS and MeteorJS for real estate purpose",
      "Converted design templates from Figma into HTML, CSS, and JavaScript code",
      "Restructured the company’s website using ReactJS.",
    ],
  },
  {
    company: "Accenture",
    title: "Application Development Associate",
    date: "April 2018 - February 2019",
    desc: [
      "Developed an analytics dashboard for a project focused on IoT for monitoring a truck’s statistics using SAP UI5",
    ],
  },
];

const Experience = () => {
  return (
    <ExperienceBackground className="m-md-auto">
      <h2>Experience</h2>
      <ExperienceBody className="m-auto">
        {Experiences.map(({ ...rest }) => (
          <ExperienceTile {...rest} />
        ))}
      </ExperienceBody>
    </ExperienceBackground>
  );
};

export default Experience;
