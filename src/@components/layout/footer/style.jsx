import styled from 'styled-components';

export const FooterWrapper = styled.div`
  position: relative;
  z-index: 1;

  width: 100%;

  background: var(--gray-000);
`;

export const FooterContents = styled.div`
  height: 8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--gray-300);

  /* gds footer와 동일한 반응형 레이아웃으로 맞춤 */
  max-width: 90rem;
  margin: auto;

  @media (min-width: 1200px) and (max-width: 1439.98px) {
    max-width: 75rem;
    padding: 0 1.875rem;
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    max-width: 62rem;
    padding: 0 2.625rem;
  }

  @media (max-width: 991.98px) {
    padding: 0 1rem;
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
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    white-space: pre-wrap;
    line-height: 1.4rem;
  }
`;

export const SocialIcon = styled.a`
  color: var(--alternative);
  text-decoration: none;
  font-size: 1.5rem;

  &:hover {
    color: #007bff;
  }

  & > svg {
    margin-right: 2rem;
  }

  @media screen and (max-width: 479px) {
    & > svg {
      margin-right: 0;
    }
  }
`;
