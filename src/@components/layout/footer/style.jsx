import styled from 'styled-components';

export const FooterWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  background: var(--gray-000);
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--gray-300);
`;

export const FooterContents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.88rem;

  width: 335px;
  flex-direction: column;
  padding: 2.88rem 0;

  @media screen and (min-width: 768px) {
    width: 688px;
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
  @media screen and (min-width: 1200px) {
    width: 1138px;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;

  @media screen and (max-width: 379px) {
    gap: 1rem;
  }
`;

export const FooterSlogan = styled.h3`
  color: var(--gray-700);

  margin: 0;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: center;
`;

export const SocialIcon = styled.a`
  color: var(--alternative);
  text-decoration: none;
  font-size: 1.5rem;

  &:hover {
    color: #007bff;
  }

  & > svg {
    margin-right: 0;
  }

  @media screen and (min-width: 768px) {
    & > svg {
      margin-right: 2rem;
    }
  }
`;
