import styled from 'styled-components';
import { Button, ButtonGroup } from '@goorm-dev/gds-components';

export const ProjectBody = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  @media (max-width: 768px) {
    width: 80%;
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

  @media (max-width: 768px) {
    grid-template-rows: 2fr;
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 768px) {
    grid-template-rows: 3fr;
    grid-template-columns: 1fr 1fr 1fr;
  }

  grid-gap: 4rem 2rem;
  grid-gap: 1rem;
  padding: 1rem;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardImgWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  overflow: hidden;
`;

export const CardImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardBedge = styled.span`
  position: absolute;
  top: 16px;
  right: 10px;
  background-color: #f0f0f5;
  color: #525463;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9rem;
`;

export const CardBodyWrapper = styled.div`
  padding: 1rem;
`;

export const CardTitle = styled.h5`
  margin: 0;
  color: #333;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const CardContent = styled.p`
  color: #666;
  font-size: 1rem;
  margin-top: 0.5rem;
`;
