import styled from 'styled-components';

export const IntroWrapper = styled.div`
  height: 100vh;
  margin-top: 100vh;
  @supports (height: 100dvh) {
    height: 100dvh;
    margin-top: 100dvh;
  }

  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--gray-100);
  border-top-left-radius: 3.25rem;
  border-top-right-radius: 3.25rem;

  @media screen and (max-width: 479px) {
    height: 120vh;
  }
`;

export const HeaderTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderTitleText = styled.h2`
  text-align: center;
`;

export const HeaderDescriptionText = styled.p`
  text-align: center;
`;

export const ImgsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Imgs = styled.figure`
  width: 55.75rem;
  height: 24.313rem;
  display: grid;
  grid-template-areas:
    'beotkkot goorm'
    'beotkkot danpoong';
  grid-template-columns: 24.625rem 30.125rem;
  grid-template-rows: 10.25rem 13.0625rem;
  gap: 0.75rem;
  margin-top: 5rem;

  @media screen and (max-width: 479px) {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    align-items: center;
    height: 100%;
  }
`;

export const ImgsSetWrapper = styled.div`
  &.beotkkot {
    grid-area: beotkkot;

    @media screen and (max-width: 479px) {
      width: 18.5625rem;
      height: 18.3125rem;
    }
  }
  &.goorm {
    grid-area: goorm;
    @media screen and (max-width: 479px) {
      width: 18.5625rem;
      height: 6.375rem;
      order: 1;
    }
  }
  &.danpoong {
    grid-area: danpoong;
    @media screen and (max-width: 479px) {
      width: 18.5625rem;
      height: 8rem;
    }
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

  &.exploded {
    animation: explode 0.5s ease-in-out;
  }

  @keyframes explode {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(1.5);
      opacity: 0;
    }
  }

  &:hover {
    &.hover-img {
      cursor: pointer;
      opacity: 100;
    }
  }
`;
