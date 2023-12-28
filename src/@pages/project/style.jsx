import styled from 'styled-components';
import { Button, ButtonGroup } from '@goorm-dev/gds-components';

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

export const BodyTitle = styled.h2`
  color: #000;
  font-feature-settings: 'clig' off, 'liga' off;
  margin-top: 5rem;
  margin-bottom: 3.88rem;
`;

export const GoormBtn = styled(Button)``;

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
