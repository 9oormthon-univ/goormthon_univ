import styled from 'styled-components';
import { Button } from '@goorm-dev/gds-components';
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

  /* KOR/H6ㅣ1rem */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 150% */
  letter-spacing: -0.00625rem;
`;

export const BodyTitle = styled.h2`
  margin-top: 5rem;
  margin-bottom: 3.88rem;
`;

export const GoormBtn = styled(Button)`
  /* background: var(--primary-transparent-24);
  color: var(--semantic-color-text-text-alternative); */
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
  width: 30%;
  margin-top: 5rem;
  /* gap: 1rem; */
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const BoldText = styled.p`
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.25rem; /* 150% */
  letter-spacing: -0.01875rem;

  text-align: center;
`;

export const Text = styled.p`
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 300;
  line-height: 2.25rem; /* 150% */
  letter-spacing: -0.01875rem;

  text-align: center;
`;
