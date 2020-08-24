import React from "react";
import styled from "styled-components";

const BackgroundContainer = styled.div`
  background: transparent;
  width: 100%;
  min-height: 30vh;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
`;

const BackgroundBody = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  & > h2 {
    margin-bottom: 64px;
  }

  h3 {
    margin: 16px 0;
  }

  a {
    text-decoration: none;
    color: white;
    &:hover {
      color: grey;
    }
    @media only screen and (max-width: 575px) {
      display: block;
    }
  }
`;

const Background = () => {
  return (
    <BackgroundContainer>
      <BackgroundBody>
        <h2>About</h2>
        <p>
          BS Computer Engineering graduate from De La Salle University - Manila.
        </p>
        <p>
          A software engineer focusing on front-end development using HTML, CSS,
          JavaScript and ReactJS.
        </p>
        <h3>Connect</h3>
        <div>
          <a href="https://github.com/anferneerapio">Github Portfolio ➤</a>
          <a href="https://www.facebook.com/rapioanfernee">Facebook ➤</a>
          <a href="mailto: rapioanfernee@gmail.com">Email ➤</a>
        </div>
      </BackgroundBody>
    </BackgroundContainer>
  );
};

export default Background;
