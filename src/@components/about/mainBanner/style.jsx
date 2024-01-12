import styled from 'styled-components';

import MainBannerImg from '../../../assets/svgs/MainBannerImg';
import MainBannerSmallImg from '../../../assets/svgs/MainBannerSmallImg';

export const MainBannerWrapper = styled.div`
  height: 100vh;
  @supports (height: 100dvh) {
    height: 100dvh;
  }

  background-color: var(--gray-950);
`;

export const HeaderTextWrapper = styled.div`
  /* container-xs */
  @media screen and (min-width: 0px) {
    margin-top: 8.5rem;
    gap: 2rem;
  }

  /* container-md */
  @media screen and (min-width: 768px) {
    margin-top: 9.75rem;
    gap: var(--size-500);
  }

  /* container-xl */
  @media screen and (min-width: 1200px) {
    margin-top: 10rem;
    gap: var(--size-500);
  }
`;

export const HeaderTitle = styled.img`
  /* container-xs */
  @media screen and (min-width: 0px) {
    width: 20.9375rem;
    height: 3.5rem;
  }

  /* container-md */
  @media screen and (min-width: 768px) {
    width: 35.5rem;
    height: 6rem;
  }

  /* container-xl */
  @media screen and (min-width: 1200px) {
    width: 53rem;
    height: 9.0625rem;
  }
`;

export const HeaderDescriptionText = styled.h3`
  color: var(--gray-300);
`;

export const HeaderDescriptionTextSmall = styled.h5`
  color: var(--gray-300);
`;

export const MainImgWrapper = styled.div`
  cursor: pointer;

  & > svg {
    stroke-dashoffset: -65;
  }
  &:hover > svg {
    stroke-dashoffset: 0;
  }
`;

export const MainImg = styled(MainBannerImg)`
  bottom: 6.75rem;
  left: 50%;
  transform: translate(-50%);

  stroke-dasharray: 500;
  transition: stroke-dashoffset 0.5s ease-in-out;
`;

export const MainSmallImg = styled(MainBannerSmallImg)`
  bottom: 6.5rem;
  left: 50%;
  transform: translate(-50%);

  stroke-dasharray: 500;
  transition: stroke-dashoffset 0.5s ease-in-out;
`;
