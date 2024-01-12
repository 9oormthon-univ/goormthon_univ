import styled from 'styled-components';

export const IntroWrapper = styled.div`
  margin-top: 100vh;
  @supports (margin-top: 100dvh) {
    margin-top: 100dvh;
  }

  background-color: var(--gray-000);
  border-top: 1px solid var(--gray-000);
  border-bottom: 1px solid var(--gray-000);
`;

export const MainCloudUpImg = styled.div`
  background-image: url(${({ url }) => url});
  height: 12.937rem;
  top: -12.937rem;
  left: 50%;
  transform: translateX(-50%);
  background-position-x: center;
`;

export const HeaderTextWrapper = styled.div``;

export const HeaderTitleText = styled.h5`
  color: var(--gray-600);
  margin-top: 2rem;
  margin-bottom: 1.5rem;
`;

export const HeaderTitleTextSmall = styled.h6`
  color: var(--gray-600);
  margin-top: 2rem;
  margin-bottom: 1.5rem;
`;

export const HeaderDescriptionText = styled.h3`
  text-align: center;
  color: var(--gray-800);
`;

export const HeaderDescriptionTextSmall = styled.h4`
  text-align: center;
  color: var(--gray-800);
  padding: 0 4.37rem;
`;

export const ImgsWrapper = styled.div``;

export const Imgs = styled.figure`
  gap: 0.75rem;
  margin-top: 5rem;
  grid-template-areas:
    'beotkkot goorm'
    'beotkkot danpoong';

  /* container-xs */
  @media screen and (min-width: 0px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  /* container-s */
  @media screen and (min-width: 576px) {
    display: grid;
    width: 33.4375rem;
    height: 14.3125rem;
    grid-template-columns: 14.49538rem 18.30263rem;
    grid-template-rows: 5.88538rem 7.8125rem;
  }

  /* container-md */
  @media screen and (min-width: 768px) {
    display: grid;
    width: 43rem;
    height: 18.4375rem;
    grid-template-columns: 18.6rem 23.5rem;
    grid-template-rows: 7.6rem 10.0625rem;
  }

  /* container-xl */
  @media screen and (min-width: 1200px) {
    display: grid;
    width: 55.75rem;
    height: 24.313rem;
    grid-template-columns: 24.625rem 30.125rem;
    grid-template-rows: 10.25rem 13.0625rem;
  }
`;

export const ImgsSetWrapper = styled.div`
  width: 100%;
  height: 100%;

  &.beotkkot {
    grid-area: beotkkot;

    /* container-xs에서 width height를 고정한다. */
    @media screen and (max-width: 575px) {
      width: 20.93081rem;
      height: 20.71925rem;
    }
  }
  &.goorm {
    grid-area: goorm;

    /* container-xs에서 width height를 고정한다. */
    @media screen and (max-width: 575px) {
      width: 20.92619rem;
      height: 6.82456rem;
      order: -1;
    }
  }
  &.danpoong {
    grid-area: danpoong;

    /* container-xs에서 width height를 고정한다. */
    @media screen and (max-width: 575px) {
      width: 20.9375rem;
      height: 8.9375rem;
    }
  }
`;

export const Img = styled.img`
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
