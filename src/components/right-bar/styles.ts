import styled from 'styled-components';

export const StyledRightBar = styled.div`
  display: none;
  width: 320px;
  min-width: 300px;

  @media screen and (min-width: 1024px) {
    display: block;
    position: sticky;
    top: 72px;
    height: fit-content;
  }
`;
