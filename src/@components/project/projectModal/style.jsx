import styled from 'styled-components';

export const ModalBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h4``;

export const Description = styled.p``;

export const ProjectImg = styled.img`
  border-radius: var(--space-300);
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 28.25rem;
    height: 15.875rem;
  }
`;

export const ContributorContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ContributorInfo = styled.div`
  display: flex;
  padding: var(--space-400) var(--space-500);
  gap: var(--space-400);
  border-radius: var(--space-300);
  border: 1px solid var(--gray-300);
  flex-basis: 49%;
  &.developer {
    flex-direction: column;
    gap: var(--space-100);
  }
`;

export const Role = styled.h6`
  margin: 0;
`;
export const Name = styled.p`
  margin: 0;
`;
