import slider from "react-slick";
import styled from "styled-components";

export const Carousel = styled(slider)`
  /* Slider styles */
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &::before {
      font-size: 3rem;
    }
    &:hover {
      opacity: 1;
    }
  }

  ul li button {
    &::before {
      font-size: 1rem;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button::before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    right: -50px;
  }

  .slick-dots {
    bottom: -35px;
  }

  /* Component Styles */
  margin-top: 20px;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const Wrap = styled.div`
  width: fit-content;
  border-radius: 10px;
  border: 7px solid transparent;
  overflow: hidden;

  &:hover {
    border: 7px solid white;
  }
  img {
    height: 100%;
    width: 100%;
  }
`;
