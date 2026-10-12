import styled from 'styled-components';

export const Container = styled.button`
  border: none;
  background-color: transparent;

  @media screen and (min-width: 1199px) {
    transition: filter .5s ease-in-out;
    
    &:hover {
      cursor: pointer;
      filter: drop-shadow(2px 2px 8px #000);
    }
  }
`;
