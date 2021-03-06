import React from "react";
import "./App.css";
import styled from "styled-components";
import backgroundImage from "./images/app-background.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import Introduction from "./Introduction/Introduction";
import Projects from "./Projects/Projects";
import Background from "./Background/Background";
import Experience from "./Experience/Experience";

const AppBackground = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  font-family: "Montserrat", sans-serif;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(8, 7, 8, 0.85);
    height: 100%;
    width: 100%;
  }
`;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  overflow: auto;
  ul {
    padding-left: 0;
    li {
      list-style: none;
      font-size: 0.75rem;
      margin: 0;
    }
  }
`;

const App = () => {
  return (
    <AppBackground>
      <AppContainer>
        <Introduction></Introduction>
        <Projects></Projects>
        <Experience></Experience>
        <Background></Background>
      </AppContainer>
    </AppBackground>
  );
};

export default App;
