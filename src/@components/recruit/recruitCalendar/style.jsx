import { motion } from 'framer-motion';
import styled from 'styled-components';

export const RecuritCalendarWrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-bottom: 9.81rem;
`;

export const BodyTitle = styled.h2`
  color: #000;
  font-feature-settings: 'clig' off, 'liga' off;
  margin-bottom: 2.25rem;
`;

export const RecuritCalendarImg = styled.img`
  width: 70%;
  flex-shrink: 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
