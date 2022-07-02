import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 2.5rem auto 0;
  padding: 30px 0 25px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;

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

export const Wrap = styled.div`
  border: 3px solid rgba(150, 150, 150, 0.5);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 0.2s linear;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }

  video {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform: scale(1.05);
    opacity: 0;
  }

  &:hover {
    video {
      opacity: 0.7;
    }

    background-color: rgba(0 0 0 0.1);
    cursor: pointer;
    transform: scale(1.1);
    border: 3px solid white;
  }
`;
