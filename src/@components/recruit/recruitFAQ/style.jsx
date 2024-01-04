import styled from 'styled-components';
import { motion } from 'framer-motion';

export const RecuritFAQWrapper = styled(motion.div)`
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid var(--basic-color-gray-gray-300, #e1e1e8);
  background: var(--semantic-color-theme-light, #fff);
`;

export const QuestionText = styled.h6`
  color: var(--semantic-color-text-text-normal, #2b2d36);

  margin: 0px;
`;

export const BodyTitle = styled.h2`
  margin-bottom: 2.25rem;
`;

export const FAQBox = styled.div`
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--semantic-color-border-border-color, #e1e1e8);
`;

export const AnswerText = styled.p`
  color: var(--semantic-color-text-text-normal, #2b2d36);

  margin-top: 1.5rem;
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

export const QuestionWrapper = styled.div`
  width: 100%;
  display: felx;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
