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
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const HeaderUnivContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 5rem;
  margin-bottom: 4.5rem;
  width: 100%;
`;

export const HeaderUnivTitleText = styled.h5`
  margin-bottom: 1.5rem;
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
