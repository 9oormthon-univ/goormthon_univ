import { motion } from 'framer-motion';
import styled from 'styled-components';

export const RecuritCalendarWrapper = styled(motion.div)`
  margin-bottom: 9.81rem;
`;

export const BodyTitle = styled.h2`
  margin-bottom: 2.25rem;
`;

export const RecuritCalendarImg = styled.img`
  width: 70%;
  flex-shrink: 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
