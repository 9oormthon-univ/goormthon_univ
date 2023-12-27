import styled from 'styled-components';
import GoorimeeEffect from '../../../assets/svgs/GoormieeEffect';

export const MainBannerWrapper = styled.div`
  height: calc(100vh - 3.53rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderTitleText = styled.h1`
  color: var(--light-black-black, #000);
  font-feature-settings: 'clig' off, 'liga' off;
  text-align: center;
  margin-top: 17rem;
`;

export const HeaderDescriptionText = styled.h4`
  color: var(--light-black-black, #000);
  font-feature-settings: 'clig' off, 'liga' off;
  text-align: center;
`;

export const MainImgWrapper = styled.div`
  position: relative;
  height: 100%;

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
`;

export const MainImg = styled.img`
  width: 17.4rem;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
`;

export const AnimatedGoormieeEffect = styled(GoorimeeEffect)`
  width: 31rem;
  height: 13.3rem;
  position: absolute;
  bottom: 2.6rem;
  left: 50%;
  transform: translate(-50%);

  stroke-dasharray: 500;
  transition: stroke-dashoffset 0.5s ease-in-out;

  & > path#click {
    fill: white;
    transition: fill 0.5s ease-in-out;
  }
`;
