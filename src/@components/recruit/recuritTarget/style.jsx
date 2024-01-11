import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TargetContainer = styled(motion.div)`
  margin-top: 8.56rem;
  margin-bottom: 9.06rem;
`;

export const TargetTitle = styled.h2``;

export const TargetDetail = styled.h5``;

export const TargetRowDetailWrapper = styled.div`
  flex-direction: row;
  gap: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TargetRowDetailBox = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 0.5rem;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  background: var(--gray-100);
`;

export const TargetDetailBoxText = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 0;
`;
