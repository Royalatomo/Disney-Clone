import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  height: 90px;
  position: sticky;
  top: 0;
  left: 0;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4%;
  z-index: 2;

  @media screen and (max-width: 950px) {
    padding: 0 1.7%;
  }

  @media screen and (max-width: 900px) {
    padding: 0 4%;
  }
`;

export const Logo = styled(Link)`
  max-width: 95px;
  min-width: 80px;
  img {
    display: block;
    width: 100%;
  }
`;

export const Login = styled.div`
  &:hover .login-btn {
    background-color: white;
    color: #090b13;
    cursor: pointer;
  }

  .login-btn {
    border: 2px solid white;
    font-size: 1.5rem;
    border-radius: 10px;
    padding: 0.5rem 1.5rem;
    background-color: #090909;
    color: white;
    font-weight: 500;
    letter-spacing: 1px;
    transition: all 0.2s ease-in-out;

    @media screen and (max-width: 1120px) {
      font-size: 1.2rem;
    }
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
  margin-right: auto;

  .nav-links {
    display: flex;
    align-items: center;
    padding: 0 10px;

    img {
      height: 2rem;
      margin-right: 4px;

      @media screen and (max-width: 1120px) {
        height: 1.4rem;
      }
    }
    span {
      transition: all 0.5s linear;
      text-transform: uppercase;
      position: relative;

      &::before {
        content: "";
        background-color: transparent;
        background-color: white;
        width: auto;
        height: 2px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -3px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }

    &:hover {
      span::before {
        transform: scaleX(1);
      }
    }
  }

  @media screen and (max-width: 950px) {
    margin-left: 15px;
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const UserImg = styled.img`
  border-radius: 50%;
  max-width: 72px;
  border: 2px solid white;

  @media screen and (max-width: 900px) {
    max-width: 60px;
  }
`;

export const SignOut = styled.div`
  height: 100%;
  min-width: 100px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover .dropdown-menu {
    opacity: 1;
  }
`;

export const DropDown = styled.div`
  opacity: 0;
  background: rgb(19, 19, 19);
  padding: 0.4rem 0.7rem;
  position: absolute;
  bottom: -35px;
  left: -10px;
  border: 1.5px solid rgba(151, 151, 151, 0.4);
  border-radius: 5px;
  font-size: 1.1rem;
  letter-spacing: 1.5px;
  color: red;
  transition: all 0.1s ease-in;

  &:hover {
    cursor: pointer;
  }
`;
