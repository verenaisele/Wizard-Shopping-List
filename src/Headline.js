import PropTypes from "prop-types";
import styled from "styled-components";

export default function Headline({ name }) {
  return <H1>{name}'s Shopping List</H1>;
}

Headline.propTypes = {
  name: PropTypes.string,
};

const H1 = styled.h1`
  color: plum;
  margin: 2rem auto;
`;
