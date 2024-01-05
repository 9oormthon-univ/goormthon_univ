import { motion } from 'framer-motion';
import styled from 'styled-components';

export const CardContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
  cursor: pointer;
`;

export const CardImgWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  overflow: hidden;
`;

export const CardImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
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

export const BadgeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;
export const cardBodyHeader = styled.div`
  margin-bottom: 1rem;
`;

export const CardBodyWrapper = styled.div`
  padding: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardTitle = styled.h5``;

export const CardContent = styled.p`
  margin-top: 0.5rem;
`;
