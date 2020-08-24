import React from "react";
import styled from "styled-components";

const BackgroundContainer = styled.div`
  background: transparent;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
`;

const BackgroundBody = styled.div`
  max-width: 1024px;
  width: 100%;
  margin-top: 64px;

  & > h2 {
    margin-bottom: 64px;
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
          Software Engineer focusing on front-end development using HTML, CSS,
          JavaScript and ReactJS
        </p>
        <p>
          Experienced multiple projects focusing on analytics dashboard, and
          ecommerce real-estate platform
        </p>
      </BackgroundBody>
    </BackgroundContainer>
  );
};

export default Background;
