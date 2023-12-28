import styled from 'styled-components';

export const GoalWrapper = styled.div`
  height: 100vh;

  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--light-gray-gray-900, #2b2d36);

  padding: 9.44rem;
`;

export const HeaderTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: start;
`;

export const HeaderTitleText = styled.h3`
  color: var(--light-white-white-light, #fff);
  font-feature-settings: 'clig' off, 'liga' off;
  z-index: 2;
`;

export const HeaderDescriptionText = styled.h6`
  color: var(--light-white-white-light, #fff);
  font-feature-settings: 'clig' off, 'liga' off;
  z-index: 2;
`;

export const Img = styled.img`
  width: max-content;
  height: max-content;

  position: absolute;
  bottom: 0;
  right: 4.69rem;

  z-index: 1;
`;

export const MovingImg = styled.img`
  width: max-content;
  height: max-content;

  position: absolute;
  bottom: 0;
  right: 25.62rem;
`;
