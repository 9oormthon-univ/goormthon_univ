import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TargetContainer = styled(motion.div)`
  width: 100%;
  flex-direction: column;
  margin-top: 8.56rem;
  margin-bottom: 9.06rem;
`;

export const TargetTitle = styled.h2`
  margin-bottom: 2.25rem;
`;

export const TargetDetail = styled.h5`
  color: var(--gray-900);
  font-feature-settings: 'clig' off, 'liga' off;
  margin-bottom: 1.5rem;
`;

export const TargetRowDetailWrapper = styled.div`
  display: flex;
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
  font-feature-settings: 'clig' off, 'liga' off;

  /* KOR/subtitle-1ㅣ0.875rem */
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 0;
`;
