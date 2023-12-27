import { motion } from 'framer-motion';
import styled from 'styled-components';




export const CardContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
  cursor: pointer;
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
