import styled from 'styled-components';

export const FooterWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 8rem;
  padding-bottom: 0.5rem;
  background: var(--basic-color-gray-gray-950, #252730);
`;

export const SocialContainer = styled.div`
  margin-right: 2rem;
  display: felx;
  flex-direction: row;
  gap: 2rem;
  float: right;
`;

export const FooterSlogan = styled.h3`
  color: var(--light-gray-gray-700-alternative, #525463);
  font-feature-settings: 'clig' off, 'liga' off;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
