import styled from 'styled-components';
import { Button } from '@goorm-dev/gds-components';

export const FindingUnivWrapper = styled.div`
  height: 100dvh;
  @supports (height: 100dvh) {
    height: 100dvh;
  }

  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--basic-color-gray-gray-050, #f7f7fa);
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* border: 1px solid black; */
  width: 100%;
  background: var(--light-gray-gray-050, #f7f7fa);
  color: #000;
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
  /* z-index: 500; */
`;

export const HeaderTitleText = styled.h2`
  color: #000;
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  margin-bottom: 1.5rem;
`;

export const HeaderUnivContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 4.5rem;
  width: 100%;
`;

export const HeaderUnivTitleText = styled.h5`
  color: #000;
  font-feature-settings: 'clig' off, 'liga' off;
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
  display: inline-flex;
  padding: 0.875rem 1.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  height: 3rem;
  flex-shrink: 0;
  background-color: #5094fa;
  border-radius: 0.5rem;
  background: var(--light-blue-blue-500-primary, #5094fa);
  color: var(--light-gray-gray-000, #fff);
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  /* KOR/H6ㅣ1rem */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 150% */
  letter-spacing: -0.00625rem;
`;

export const BtnText = styled.h6`
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
`;
