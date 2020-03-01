import styled from "styled-components";

export const Masonry = styled.div`
  column-count: 2;
  column-gap: 1em;

  @media (max-width: 768px) {
    column-count: 1;
  }

  div {
    display: inline-block;
    margin: 0 0 1em;
    width: 100%;
  }
`;
