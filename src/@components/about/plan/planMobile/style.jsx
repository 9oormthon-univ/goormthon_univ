import styled from 'styled-components';

export const PlanWrapper = styled.div`
  height: 100%;

  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  background-color: var(--light-gray-gray-100, #f0f0f5);
`;

export const TitleText = styled.h2`
  text-align: center;
  margin-bottom: 3.63rem;
  color: var(--light-black-black, #000);
  font-feature-settings: 'clig' off, 'liga' off;
`;

export const CardWrapper = styled.div`
  transition: left 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: ${({ $xOffset }) => $xOffset}px;
`;

export const CardContentsWrapper = styled.div`
  width: 22.75rem;
  height: 10.375rem;
  background: var(--light-white-white-light, #fff);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.25rem;
`;

export const IconWrapper = styled.div`
  color: var(--light-black-black, #000);
  margin-bottom: 0.44rem;
  & > svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const CardTitleText = styled.h4`
  color: var(--light-black-black, #000);
  font-feature-settings: 'clig' off, 'liga' off;
  margin-bottom: 1.25rem;
`;

export const CardDescriptionText = styled.p`
  color: var(--light-black-black, #000);
  white-space: pre-wrap;
`;

export const TimelineBar = styled.figure`
  width: 2rem;
  height: 61.125rem;
  border-radius: 1rem;
  background: var(--light-gray-gray-050, #f7f7fa);
  position: relative;
`;

export const TimelineFillBar = styled.div`
  width: -webkit-fill-available;
  height: ${({ $fillRatio }) => $fillRatio}%;
  background-color: var(--blue-500);
  border-radius: 1.34375rem;
  position: absolute;
  transition: height 0.5s ease-in-out;
`;

export const ProgressBar = styled.div`
  position: absolute;
`;

export const MonthTextWrapper = styled.div`
  height: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const MonthTextClickable = styled.h5`
  margin: 0;
  cursor: pointer;
  color: var(--light-gray-gray-400, #cdced6);

  font-feature-settings: 'clig' off, 'liga' off;
  width: 3.75rem;
  height: 3.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  background-color: var(--light-gray-gray-050, #f7f7fa);
  border-radius: 50%;
  &.active,
  &.prev {
    color: var(--light-white-white-light, #fff);
    background-color: var(--blue-500);
    border-radius: 50%;
  }
`;

export const CardBar = styled.img`
  transition: margin 0.5s ease-in-out;
  width: max-content;
  height: 5.5rem;
  ${({ $month }) => ($month === 1 ? 'margin-left: 30px' : $month === 6 ? 'margin-left: 296px' : 'margin-left:169px')};
`;
