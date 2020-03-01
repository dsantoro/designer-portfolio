import styled from "styled-components";

export const Container = styled.nav`
  transform: ${({ active }) => (active ? "translateX(0)" : "translateX(100%)")};
  opacity: ${({ active }) => (active ? "1" : "0")};
  transition: opacity 0.3s ease-in, transform 0.2s ease-out;
  position: fixed;
  right: 0;
  top: 0;
  background-color: #333333;
  z-index: 100;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 40px;
  min-width: 25%;
`;

export const List = styled.ul`
  width: 100%;
  list-style: none;
  margin: 0;

  > li {
    font-size: 36px;
    line-height: 1;

    &:not(:last-child) {
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      padding-bottom: 15px;
      margin-bottom: 15px;
    }

    > a {
      display: block;
      color: white;
      position: relative;

      &:before {
        content: "";
        width: 0;
        height: 0;
        background-color: #e7124e;
        top: 50%;
        left: -15px;
        transform: translateY(-50%);
        position: absolute;
        z-index: -1;
        transition: all 0.3s;
      }

      &:hover {
        &:before {
          width: 100%;
          height: 14px;
        }
      }
    }
  }
`;
