import React from "react";
import styled from "styled-components";

const BackgroundContainer = styled.div`
  background: white;
  width: 100%;
  min-height: 30vh;
  color: black;
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
    color: black;
    &:not(:last-child) {
      margin-right: 16px;
    }
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
      <BackgroundBody className="m-md-auto py-5 px-2 px-sm-1">
        <h2>About</h2>
        <p>
          A software engineer focusing on front-end development using HTML, CSS,
          JavaScript and ReactJS.
        </p>
        <p>
          BS Computer Engineering graduate from De La Salle University - Manila.
        </p>
        <h3>Connect</h3>
        <div>
          <a href="https://github.com/rapioanfernee">Github Portfolio ➤</a>
          <a href="https://www.facebook.com/rapioanfernee">Facebook ➤</a>
          <a href="mailto: rapioanfernee@gmail.com">Email ➤</a>
        </div>
      </BackgroundBody>
    </BackgroundContainer>
  );
};

export default Background;
