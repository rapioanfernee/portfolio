import React from "react";
import styled from "styled-components";

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
  p {
    margin-top: 16px;
  }
  a {
    text-decoration: none;
    color: white;
    &:hover {
      color: grey;
    }
  }
`;

const Introduction = () => (
  <IntroductionContainer>
    <IntroductionBody className="m-md-auto pb-5">
      <h1>Anfernee Rapio</h1>
      <h2 className="mt-4">Software Engineer - Front End Developer</h2>
      <p>HTML, CSS, JavaScript, React</p>
      <a href="https://github.com/anferneerapio">Github Portfolio ➤</a>
    </IntroductionBody>
  </IntroductionContainer>
);

export default Introduction;
