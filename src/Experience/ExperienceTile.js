import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ExperienceTileBackground = styled.div`
  max-width: 992px;
  i {
    font-size: 1.25rem;
  }
  small {
    display: block;
    margin-bottom: 32px;
  }
  p {
    font-size: 0.85rem;
  }
  @media only screen and (max-width: 992px) {
    margin: 32px 0px;
    p {
      font-size: 0.8rem;
    }
  }
`;

const ExperienceTile = ({ company, title, date, desc }) => {
  return (
    <ExperienceTileBackground>
      <h3>{company}</h3>
      <i>{title}</i>
      {desc.map((d) => (
        <p>{d}</p>
      ))}
    </ExperienceTileBackground>
  );
};

ExperienceTile.propTypes = {
  company: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  desc: PropTypes.arrayOf(PropTypes.string),
};

ExperienceTile.defaultProps = {
  company: "Lorem Ipsum",
  title: "Lorem Ipsum",
  date: "Lorem Ipsum",
  desc: ["Lorem", "Ipsum"],
};

export default ExperienceTile;
