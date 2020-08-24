import React from "react";
import styled from "styled-components";
import CSSIcon from "../images/css3.png";
import HTML5Icon from "../images/html5.png";
import JSIcon from "../images/js.png";
import ReactIcon from "../images/react.png";

const IntroductionContainer = styled.div`
  background: transparent;
  height: 90vh;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 16px;
`;

const IntroductionBody = styled.div`
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  p {
    margin-top: 16px;
  }
`;

const SkillsAndPortfolio = styled.div`
  & > div:first-of-type {
    display: flex;
    margin-bottom: 32px;
    text-align: center;
    span:not(:last-child) {
      margin-right: 64px;

      @media only screen and (max-width: 992px) {
        max-width: 32px;
      }
    }
  }
`;

const NameAndTitle = styled.div`
  margin-bottom: 64px;
`;

const Introduction = () => (
  <IntroductionContainer>
    <IntroductionBody className="m-md-auto pb-5 px-2 px-sm-1">
      <NameAndTitle>
        <h1>Anfernee Rapio</h1>
        <h2 className="mt-4">Software Engineer - Front End Developer</h2>
      </NameAndTitle>
      <SkillsAndPortfolio>
        <div>
          <span>
            <img src={HTML5Icon} alt="project"></img>
            <p>HTML</p>
          </span>
          <span>
            <img src={CSSIcon} alt="project"></img>
            <p>CSS</p>
          </span>
          <span>
            <img src={JSIcon} alt="project"></img>
            <p>JavaScript</p>
          </span>
          <span>
            <img src={ReactIcon} alt="project"></img>
            <p>React</p>
          </span>
        </div>
      </SkillsAndPortfolio>
    </IntroductionBody>
  </IntroductionContainer>
);

export default Introduction;
