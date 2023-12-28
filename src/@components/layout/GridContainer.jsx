import React from 'react';
import styled from 'styled-components';

export default function GridContainer({ children }) {
  return <GridContainerWrapper>{children}</GridContainerWrapper>;
}

export const GridContainerWrapper = styled.div`
  /* 노트북 & 테블릿 가로 (해상도 1024px ~ 1279px)*/
  @media screen and (min-width: 1279px) {
    width: 1104px;
    padding: 0;
  }

  width: 100%;
  padding: 0 87.5px;
`;
