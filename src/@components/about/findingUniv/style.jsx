import styled from 'styled-components';
import { Button } from '@goorm-dev/gds-components';

export const FindingUnivWrapper = styled.div`
  height: 100vh;
  @supports (height: 100dvh) {
    height: 100dvh;
  }

  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--gray-050);
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background: var(--gray-050);
`;

export const HeaderTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 6.25rem;
  margin-bottom: 8.25rem;
`;

export const RowPosters = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  scroll-behavior: smooth;
`;

export const HeaderTitleText = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;

  display: none;
  @media screen and (min-width: 1200px) {
    display: block;
  }
`;

export const HeaderTitleTextSmall = styled.h3`
  text-align: center;
  margin-bottom: 1.5rem;

  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const HeaderUnivContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 4.5rem;
  width: 100%;
`;

export const HeaderUnivTitleText = styled.h3`
  margin-bottom: 1.5rem;
  display: none;

  @media screen and (min-width: 1200px) {
    display: block;
  }
`;

export const HeaderUnivTitleTextSmall = styled.h4`
  margin-bottom: 1.5rem;

  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const HeaderUnivListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  margin-top: 1.5rem;
`;

export const GoormBtn = styled(Button)`
  padding: 0.875rem 1.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  height: 3rem;
`;
