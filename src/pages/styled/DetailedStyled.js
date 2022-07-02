import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 90px);
  position: relative;
  overflow-x: hidden;
  padding: 2rem 5vw;
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  opacity: 0.8;
  z-index: -1;
  height: 100vh;
  width: 100vw;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    @media screen and (max-width: 780px) {
      object-fit: contain;
      width: initial;
      height: initial;
    }
  }
`;

export const ImgTitle = styled.div`
  display: flex;
  min-height: 170px;
  height: calc(50vh - 90px);
  align-items: flex-end;

  img {
    height: 100%;
    max-width: 600px;
    max-height: 200px;
    min-width: 200px;
  }

  @media screen and (max-width: 780px) {
    justify-content: center;
  }
  @media screen and (max-width: 380px) {
    img {
      max-height: 144px;
    }
  }
`;

export const ContentMeta = styled.div`
  max-width: 875px;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  margin: 3rem 0;
  min-height: 56px;

  @media screen and (max-width: 780px) {
    justify-content: center;
  }

  @media screen and (max-width: 529px) {
    flex-direction: column;
  }
`;

export const Player = styled.button`
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 0px 0px black;
  border: none;
  margin-right: 1.5rem;
  transition: all 0.1s linear;

  span {
    text-transform: uppercase;
    font-size: 1.2rem;
    letter-spacing: 1.5px;
    display: inline-block;
    margin-left: 6px;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  @media screen and (max-width: 529px) {
    margin-right: 1rem;

    span {
      font-size: 1.1rem;
      margin-left: 4px;
    }
  }

  @media screen and (max-width: 529px) {
    width: 70%;
    justify-content: center;
    margin-bottom: 2rem;

    span {
      font-size: 1.4rem;
    }
  }
`;

export const Trailer = styled(Player)`
  background-color: rgba(0, 0, 0, 0.4);
  outline: 1px solid white;

  span {
    color: white;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

export const OtherIcons = styled.div`
  display: flex;
  @media screen and (max-width: 529px) {
    width: 100%;
    justify-content: space-evenly;
    max-width: 40px;
  }
`;

export const AddList = styled.div`
  min-height: 50px;
  min-width: 50px;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid rgba(255, 255, 255, 0.8);
  align-items: center;
  position: relative;
  transition: all 0.1s linear;
  margin-right: 1rem;

  span {
    height: 3px;
    background-color: white;
    display: inline-block;
    position: absolute;
    border-radius: 10px;

    &:first-child {
      width: 50%;
    }

    &:nth-child(2) {
      width: 50%;
      transform: rotate(90deg);
    }
  }

  @media screen and (max-width: 529px) {
    min-height: 60px;
    min-width: 60px;
    margin-right: 2rem;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const GroupWatch = styled(AddList)`
  margin-right: 0;
  @media screen and (max-width: 529px) {
    margin-right: 0;
  }
`;

export const SubTitles = styled.div`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  letter-spacing: 2px;
  color: lightgrey;
`;
export const Description = styled.div`
  font-size: 1.3rem;
  color: #f7f7f7;
  letter-spacing: 1px;
  word-spacing: 1px;
  line-height: 1.5;
`;
