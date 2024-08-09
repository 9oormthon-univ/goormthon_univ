import styled from 'styled-components';

export const CautionRowBox = styled.div`
  display: flex;
  width: 23rem;
  padding: 1.25rem;
  border-radius: 0.5rem;
  border: 1px solid var(--gray-300);
  background: var(--white-light);

  @media (max-width: 1055px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 0.2rem;
  }
`;

export const CautionTitle = styled.div`
  width: 30%;
  margin-right: var(--space-600);
`;

export const CautionDetail = styled.div``;
