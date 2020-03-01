import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  background-color: #333333;
  padding: 20px 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(Link)`
  display: inline-block;
`;

export const ImageLogo = styled.img`
  border-radius: 50%;
  max-width: 80px;
`;

export const Hamburguer = styled.button`
  z-index: 1;
  background-color: #333333;
  border: none;
  cursor: pointer;

  span {
    display: block;
    width: 33px;
    height: 2px;
    margin-bottom: 5px;
    position: relative;

    background: #ffffff;
    border-radius: 3px;

    z-index: 1;

    transform-origin: 4px 0px;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }

  span:first-child() {
    transform-origin: 0% 0%;
  }

  span:nth-last-child(2) {
    transform-origin: 0% 100%;
    width: 27px;
    transition: width 0.3s;
  }

  &:hover {
    span:nth-last-child(2) {
      width: 33px;
    }
  }
`;
