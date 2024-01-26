import styled from 'styled-components';
import { Button } from '@goorm-dev/gds-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2.25rem;
  padding: 6.25rem 0rem;
`;

export const HeaderTitleWrapper = styled.div``;

export const HEaderOpenDayWrapper = styled.div`
  padding: var(--space-800);
  flex-direction: column;
  align-items: center;
  gap: var(--space-500);
  border-radius: var(--space-700);
  background: var(--gray-050);
`;

export const RowPosters = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  scroll-behavior: smooth;
`;

export const HeaderDate = styled.h6`
  color: var(--alternative);
  font-size: 4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.5625rem; /* 89.063% */
  letter-spacing: -0.025rem;
`;

export const HeaderTitleText = styled.h2`
  text-align: left;
  margin-bottom: 1.5rem;
`;

export const HeaderUnivContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 5rem;
  margin-bottom: 2.5rem;
  width: 100%;
  /* 모바일 & 테블릿 (해상도 480px ~ 767px)*/
  @media screen and (min-width: 480px) and (max-width: 767px) {
    width: 390px;
  }

  /* 모바일 (해상도 ~479px) */
  @media screen and (max-width: 479px) {
    width: 390px;
  }
`;

export const HeaderUnivTitleText = styled.h3`
  color: var(--dark);
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const HeaderUnivListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  /* border: 1px solid purple; */
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

export const DateBigText = styled.div`
  color: var(--alternative);
  font-size: 4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.5625rem; /* 89.063% */
  letter-spacing: -0.025rem;
`;

export const DatesmallText = styled.h3`
  color: var(--alternative);
`;
