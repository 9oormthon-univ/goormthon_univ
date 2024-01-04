import styled from 'styled-components';

export const GoalWrapper = styled.div`
  height: 100vh;
  @supports (height: 100dvh) {
    height: 100dvh;
  }

  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--gray-900);

  @media screen and (max-width: 1024px) {
    justify-content: start;
  }
`;

export const HeaderTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: start;

  @media screen and (max-width: 1024px) {
    justify-content: start;
    margin-top: 9.81rem;
  }

  @media screen and (max-width: 479px) {
    justify-content: start;
    margin-top: 5.81rem;
  }
`;

export const HeaderTitleText = styled.h3`
  color: var(--light);
  z-index: 2;
  white-space: pre-wrap;

  @media screen and (max-width: 479px) {
    white-space: unset;
  }
`;

export const HeaderDescriptionText = styled.h6`
  color: var(--light);
  z-index: 2;
`;

export const Img = styled.img`
  width: max-content;
  height: max-content;

  position: absolute;
  bottom: 0;

  right: 8.69rem;
  @media screen and (max-width: 1279px) {
    right: 4.69rem;
  }

  z-index: 1;

  @media screen and (max-width: 1024px) {
    width: 30rem;
    right: 4rem;
  }

  @media screen and (max-width: 479px) {
    width: 30rem;
    right: 50%;
    bottom: 0;
    transform: translateX(50%);

    /* 추후 수정 필요 */
    display: none;
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
