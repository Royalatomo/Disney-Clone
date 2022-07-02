import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.section`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 90px);
  width: 100vw;
  text-align: center;
  min-height: 500px;
`;

export const BgImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 100%;
  min-width: 100%;

  /* Img */
  background-image: url("/images/login-background.jpg");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const InfoBox = styled.div`
  max-width: 610px;
  margin: 0 3rem;

  @media screen and (max-width: 379px) {
    margin: 0 1rem;
  }
`;

export const Logo = styled.img`
  margin: 0 auto;
  margin-bottom: 1rem;
  display: block;
  max-width: 100%;
`;

export const SignUp = styled(Link)`
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: bold;
  background-color: #0063e5;
  width: 100%;
  display: block;
  text-transform: uppercase;
  margin-bottom: 1.7rem;
  letter-spacing: 1.3px;
  padding: 0.7rem 0;
  border-radius: 10px;
  transform: translateY(-3px);
  box-shadow: 0px 8px 1px #000000b0;
  transition: all 0.1s linear;

  &:hover {
    background-color: #0483ee;
  }
  &:active {
    box-shadow: 0px 0px 5px #000000b0;
    transform: translateY(0);
  }

  @media screen and (max-width: 530px) {
    font-size: 1.3rem;
    padding: 0.6;
  }

  @media screen and (max-width: 379px) {
    font-size: 1.1rem;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  letter-spacing: 0.2px;
  word-spacing: 1px;
  line-height: 1.3;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 379px) {
    font-size: 1.1rem;
    letter-spacing: 0;
    word-spacing: 1px;
    line-height: 1.3;
    margin-bottom: 0.8rem;
  }
`;
