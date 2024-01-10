import styled from 'styled-components';

import MainBannerImg from '../../../assets/svgs/MainBannerImg';
import MainBannerSmallImg from '../../../assets/svgs/MainBannerSmallImg';

export const MainBannerWrapper = styled.div`
  height: 100vh;
  @supports (height: 100dvh) {
    height: 100dvh;
  }

  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background-color: var(--gray-950);
`;

export const HeaderTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--size-500);
  margin-top: 9.62rem;
`;

export const HeaderTitle = styled.img``;

export const HeaderDescriptionText = styled.h3`
  text-align: center;
  color: var(--gray-300);
`;

export const MainImgWrapper = styled.div`
  position: relative;
  width: 90%;
  height: 17.25rem;

  cursor: pointer;

  & > svg {
    stroke-dashoffset: -65;
  }
  &:hover > svg {
    stroke-dashoffset: 0;
    & > path#click {
      fill: black;
    }
  }

  @media screen and (max-width: 379px) {
    width: 80%;
  }
`;

export const MainImg = styled(MainBannerImg)`
  width: max-content;
  position: absolute;
  bottom: 6.75rem;
  left: 50%;
  transform: translate(-50%);

  stroke-dasharray: 500;
  transition: stroke-dashoffset 0.5s ease-in-out;

  @media screen and (max-width: 479px) {
    display: none;
  }
`;

export const MainSmallImg = styled(MainBannerSmallImg)`
  display: none;
  width: max-content;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);

  stroke-dasharray: 500;
  transition: stroke-dashoffset 0.5s ease-in-out;

  @media screen and (max-width: 479px) {
    display: block;
  }
`;
