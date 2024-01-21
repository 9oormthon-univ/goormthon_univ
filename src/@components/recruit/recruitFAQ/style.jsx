import styled from 'styled-components';
import { motion } from 'framer-motion';

export const RecuritFAQWrapper = styled(motion.div)`
  width: 100%;

  background: var(--theme-light);
`;

export const QuestionText = styled.h5`
  color: var(--text-alternative);
  margin: 0px;
`;

export const BodyTitle = styled.h2`
  margin-bottom: 2.25rem;
`;

export const FAQBox = styled.div`
  padding: 1rem 0rem;
  border-bottom: 1px solid var(--border-color);
`;

export const AnswerText = styled.p`
  color: var(--text-normal);
  margin-top: 1rem;
  margin-left: 2rem;
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

export const QuestionWrapper = styled.div``;
