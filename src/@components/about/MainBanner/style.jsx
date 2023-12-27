import styled from 'styled-components';

export const MainBannerWrapper = styled.div`
  height: 100vh;
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
`;

export const MainImg = styled.img`
  width: 17.4rem;
  height: 12.7rem;
  position: absolute;
  bottom: 3.625rem;
  left: 50%;
  transform: translate(-50%);
`;

export const EffectImg = styled.img`
  width: 31rem;
  height: 13.3rem;
  position: absolute;
  bottom: 8.5rem;
  left: 50%;
  transform: translate(-50%);
`;
