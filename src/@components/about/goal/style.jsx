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

  /* container-xs */
  @media screen and (min-width: 0px) {
    margin-bottom: 6.25rem;
  }

  /* container-md */
  @media screen and (min-width: 768px) {
    gap: 1.5rem;
    margin-bottom: 6.67rem;
  }
  /* container-xl */
  @media screen and (min-width: 1200px) {
    gap: var(--space-700);
    align-items: start;
    margin-bottom: 0;
  }
`;

export const HeaderTitleText = styled.h3`
  color: var(--gray-000);
  white-space: pre-wrap;
  text-align: start;

  /* container-xs */
  @media screen and (min-width: 0px) {
    display: none;
  }

  /* container-md */
  @media screen and (min-width: 768px) {
    display: block;
    text-align: center;
  }

  /* container-xl */
  @media screen and (min-width: 1200px) {
    display: block;
    text-align: start;
  }
`;

export const HeaderTitleTextSmall = styled.h4`
  color: var(--gray-000);
  white-space: pre-wrap;
  text-align: center;

  /* container-xs */
  @media screen and (min-width: 0px) {
    display: block;
  }

  /* container-md, xl */
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const HeaderDescriptionText = styled.h5`
  color: var(--gray-500);

  /* container-xs */
  @media screen and (min-width: 0px) {
    display: none;
  }

  /* container-md */
  @media screen and (min-width: 768px) {
    display: block;
    text-align: center;
    margin-top: 12.9375rem;
  }

  /* container-xl */
  @media screen and (min-width: 1200px) {
    display: block;
    text-align: start;
  }
`;

export const HeaderDescriptionTextSmall = styled.h6`
  color: var(--gray-500);
  text-align: center;

  /* container-xs */
  @media screen and (min-width: 0px) {
    display: block;
  }

  /* container-md, xl */
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const ContentsWrapper = styled.div`
  display: flex;

  /* container-xs, md */
  flex-direction: column;

  /* container-xl */
  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const Img = styled.img`
  /* container-xs,md */
  width: 34.25rem;
  height: 31.375rem;

  /* container-xl */
  @media screen and (min-width: 1200px) {
    width: 48.9375rem;
    height: 44.8125rem;
  }
`;
