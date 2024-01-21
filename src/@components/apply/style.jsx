import styled from 'styled-components';

export const FormDescription = styled.div`
  width: 100%;
  font-size: 1rem;
  color: #333;
  text-align: left;
  border-radius: var(--space-500);
  border: 1px solid var(--gray-300);
  background: var(--gray-050);
  margin-bottom: 8rem;
  padding: 1.5rem;

  ul {
    padding-left: 20px;
  }

  li {
    margin-bottom: 0.5rem;
  }

  h4 {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
`;

export const CautionTitle = styled.h3`
  margin-left: 1.5rem;
  margin-bottom: 1.25rem;
`;

export const CautionWrapper = styled.div`
  margin-top: 2.5rem;
  line-height: 1.25rem;
`;
export const Caution2Li = styled.li`
  color: var(--hint);
`;
