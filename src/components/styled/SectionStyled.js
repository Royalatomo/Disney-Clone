import styled from "styled-components";
import slider from "react-slick";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 90%;
  margin: 2.5rem auto 0;
  padding: 30px 0 25px;

  h1 {
    margin-bottom: 2rem;
    line-height: 1.2;
  }
`;

export const Content = styled(slider)`
  /* slider styles */
  ul li button {
    display: none;
  }
  .slick-list {
    overflow: initial;
  }

  & > button {
    opacity: 0;
    height: 100%;
    z-index: 1;

    &::before {
      font-size: 3rem;
    }
    &:hover {
      opacity: 1;
    }
  }

  .slick-slide > div {
    padding: 0 5px;
  }

  /* component styles */
  width: 100%;
  @media screen and (max-width: 1090px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Movie = styled(Link)`
  border: 3px solid rgba(150, 150, 150, 0.5);
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  transform: scale(0.95);
  transition: all 0.2s linear;

  img {
    width: 100%;
    height: 100%;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1);
    border: 3px solid white;
    box-shadow: 2px 4px 15px black;
  }
`;
