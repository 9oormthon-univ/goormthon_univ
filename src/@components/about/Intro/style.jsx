import styled from 'styled-components';

export const IntroWrapper = styled.div`
  height: 100vh;
  margin-top: calc(100vh - 3.53rem);

  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--light-gray-gray-100, #f0f0f5);
  border-top-left-radius: 3.25rem;
  border-top-right-radius: 3.25rem;
`;

export const HeaderTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderTitleText = styled.h2`
  color: var(--light-black-black, #000);
  font-feature-settings: 'clig' off, 'liga' off;
  text-align: center;
`;

export const HeaderDescriptionText = styled.p`
  color: var(--light-black-black, #000);
  font-feature-settings: 'clig' off, 'liga' off;
  text-align: center;
`;

export const ImgsWrapper = styled.figure`
  width: 40.875rem;
  height: 17.813rem;
  display: grid;
  grid-template-areas:
    'beotkkot goorm'
    'beotkkot danpoong';
  grid-template-columns: 288px 354px;
  gap: 0.75rem;
  margin-top: 5rem;
`;

export const ImgsSetWrapper = styled.div`
  &.beotkkot {
    grid-area: beotkkot;
  }
  &.goorm {
    grid-area: goorm;
  }
  &.danpoong {
    grid-area: danpoong;
  }
  position: relative;
`;

export const Img = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;

  transition: opacity 0.5s ease-in-out;
  &.hover-img {
    opacity: 0;
  }

  &:hover {
    &.hover-img {
      cursor: pointer;
      opacity: 100;
    }
  }
`;
