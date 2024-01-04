import styled from 'styled-components';

export const FooterWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 8rem;
  padding: 0.5rem 2rem;
  background: var(--gray-950);
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  @media screen and (max-width: 379px) {
    gap: 1rem;
  }
`;

export const FooterSlogan = styled.h3`
  color: var(--alternative);

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
