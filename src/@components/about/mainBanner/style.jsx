import styled from 'styled-components';
import GoorimeeEffect from '../../../assets/svgs/GoormieeEffect';
import GoorimeeEffectSmall from '../../../assets/svgs/GoormieeEffectSmall';

import MainBannerImg from '../../../assets/svgs/MainBannerImg';

export const GhostDiv = styled.div`
  @media screen and (max-width: 479px) {
    height: 10rem;
  }
`;

export const MainBannerWrapper = styled.div`
  height: calc(100vh - 3.53rem);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background-color: #ffffff;
`;

export const HeaderTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 479px) {
    margin-bottom: 2rem;
  }
`;

export const HeaderTitleText = styled.h1`
  color: var(--light-black-black, #000);
  font-feature-settings: 'clig' off, 'liga' off;
  text-align: center;
  @media screen and (max-width: 479px) {
    width: 22rem;
  }
`;

export const HeaderDescriptionText = styled.h4`
  color: var(--light-black-black, #000);
  font-feature-settings: 'clig' off, 'liga' off;
  text-align: center;
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
  bottom: 0;
  left: 50%;
  transform: translate(-50%);

  stroke-dasharray: 500;
  transition: stroke-dashoffset 0.5s ease-in-out;

  @media screen and (max-width: 479px) {
    display: none;
  }
`;

export const AnimatedGoormieeEffect = styled(GoorimeeEffect)`
  width: max-content;
  height: max-content;
  position: absolute;
  bottom: 2.6rem;
  left: 50%;
  transform: translate(-50%);

  stroke-dasharray: 500;
  transition: stroke-dashoffset 0.5s ease-in-out;

  @media screen and (max-width: 479px) {
    display: none;
  }
`;

export const MainImgSmall = styled.img`
  display: none;
  width: 17.4rem;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);

  @media screen and (max-width: 479px) {
    width: 12rem;
    display: block;
  }
`;

export const AnimatedGoormieeEffectSmall = styled(GoorimeeEffectSmall)`
  display: none;
  width: max-content;
  height: max-content;
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translate(-50%);

  stroke-dasharray: 500;
  transition: stroke-dashoffset 0.5s ease-in-out;

  @media screen and (max-width: 479px) {
    display: block;
  }
`;
