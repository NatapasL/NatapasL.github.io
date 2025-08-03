import styled from 'styled-components';

export const StyledPostScreen = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media screen and (min-width: 1024px) {
    padding: 16px 4px;
  }
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 16px;
`;
