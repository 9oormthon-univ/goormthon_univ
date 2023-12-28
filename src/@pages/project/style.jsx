import styled from 'styled-components';
import { Button, ButtonGroup } from '@goorm-dev/gds-components';
import { motion } from 'framer-motion';

export const ProjectBody = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const GoormBtn2 = styled(Button)`
  margin-top: 2rem;
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

export const BodyTitle = styled.h2`
  color: #000;
  font-feature-settings: 'clig' off, 'liga' off;
  margin-top: 5rem;
  margin-bottom: 3.88rem;
`;

export const GoormBtn = styled(Button)`
  background: var(--semantic-color-theme-primary-transparent-24, rgba(80, 148, 250, 0.24));
  color: var(--semantic-color-text-text-alternative, #525463);
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
`;

export const ProjectBanner = styled.img`
  margin-top: 2.75rem;

  width: 70%;
  flex-shrink: 0;
`;

export const ProjectCardGrid = styled.div`
  /* display: grid; */
  /* grid-template-columns: repeat(auto-fit, minmax(250px, 3fr)); */
  width: 100%;
  margin: 2rem 0;
  display: grid;
  grid-gap: 2.47rem 2rem;
  @media (max-width: 768px) {
    grid-template-rows: 2fr;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.2rem 1rem;
  }
  @media (min-width: 768px) {
    grid-template-rows: 3fr;
    grid-template-columns: 1fr 1fr 1fr;
  }

  padding: 1rem;
`;

export const SecondTabContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SeasonthonImg = styled.img`
  width: 45%;
  margin-top: 5rem;
  @media (max-width: 768px) {
    width: 80%;
  }
`;
