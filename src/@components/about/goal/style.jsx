import styled from 'styled-components';

export const GoalWrapper = styled.div`
  height: calc(100vh + 12.9375rem);
  @supports (height: 100dvh) {
    height: calc(100dvh + 12.9375rem);
  }

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  background-color: var(--gray-900);
`;

export const HeaderTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  /* container-xl */
  @media screen and (min-width: 1200px) {
    gap: var(--space-700);
    align-items: start;
    margin-top: 12.9375rem;
  }

  @media screen and (min-width: 768px) {
    text-align: center;
    gap: 1.5rem;
  }
`;

export const HeaderTitleText = styled.h3`
  color: var(--gray-000);
  white-space: pre-wrap;

  /* container-md */
  @media screen and (min-width: 768px) {
    text-align: center;
  }

  /* container-xl */
  @media screen and (min-width: 1200px) {
    text-align: start;
  }
`;

export const HeaderDescriptionText = styled.h6`
  color: var(--gray-500);
`;

export const ContentsWrapper = styled.div`
  display: flex;

  /* container-md */
  @media screen and (min-width: 768px) {
    flex-direction: column;
  }

  /* container-xl */
  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const Img = styled.img`
  @media screen and (min-width: 1200px) {
    width: max-content;
    height: max-content;
  }

  @media screen and (min-width: 768px) {
    width: 34.25rem;
    height: 31.375rem;
  }
`;

export const MovingImg = styled.img`
  width: max-content;
  height: max-content;

  position: absolute;
  bottom: 0;

  right: 29.4rem;
  @media screen and (max-width: 1279px) {
    right: 25.4rem;
  }

  @media screen and (max-width: 1024px) {
    width: 1rem;
    right: 17.3rem;
  }

  @media screen and (max-width: 479px) {
    width: 1rem;
    right: 46%;
    height: 20rem;
    transform: translateX(46%);

    /* 추후 수정 필요 */
    display: none;
  }
`;

export const WholeImg = styled.img`
  display: none;
  width: 26rem;
  position: absolute;
  bottom: 0;

  @media screen and (max-width: 479px) {
    display: block;
  }
`;
