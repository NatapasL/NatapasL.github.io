import styled from 'styled-components';

export const StyledHomeScreen = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media screen and (min-width: 1024px) {
    padding: 16px 4px;
  }

  .post-list {
    width: 100%;
    row-gap: 8px;
    display: flex;
    flex-direction: column;
  }
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 16px;
`;

export const StyledCategoryTitle = styled.h3`
  margin-bottom: 12px;
`;
