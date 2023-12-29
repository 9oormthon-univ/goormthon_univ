import React from 'react';
import styled from 'styled-components';

export default function GridContainer({ children }) {
  return <GridContainerWrapper>{children}</GridContainerWrapper>;
}

export const GridContainerWrapper = styled.div`
  width: 100%;
  padding: 0 5.469rem;

  /* 노트북 (해상도 1279px ~)*/
  @media screen and (min-width: 1279px) {
    width: 1104px;
    padding: 0;
  }

  /* 노트북 & 테블릿 (해상도 1024px ~ 1278px)*/
  @media screen and (min-width: 1024px) {
    width: 100%;
    padding: 0 5.469rem;
  }

  /* 테블릿 (해상도 768px ~ 1023px)*/
  @media screen and (min-width: 768px) {
    width: 100%;
    padding: 0 5.469rem;
  }

  /* 모바일 & 테블릿 (해상도 480px ~ 767px)*/
  @media screen and (min-width: 480px) {
    width: 100%;
    padding: 0 5.469rem;
  }

  /* 모바일 (해상도 ~479px) */
  @media screen and (max-width: 479px) {
    width: 100%;
    padding: 0 2.25rem;
  }
`;
