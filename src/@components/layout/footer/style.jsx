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
  background: var(--basic-color-gray-gray-950, #252730);
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

export const FooterSlogan = styled.h3`
  color: var(--light-gray-gray-700-alternative, #525463);
  font-feature-settings: 'clig' off, 'liga' off;
  margin: 0;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
justify-self: center;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const SocialIcon = styled.a`
  color: var(--light-gray-gray-700-alternative, #525463);
  text-decoration: none;
  font-size: 1.5rem;

  &:hover {
    color: #007bff;
  }
`;
