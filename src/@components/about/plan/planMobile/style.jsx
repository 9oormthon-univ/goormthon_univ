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

export const TitleText = styled.h3`
  text-align: center;
  margin-bottom: 3.75rem;
  margin-top: 4rem;
  color: var(--light-black-black, #000);
  font-feature-settings: 'clig' off, 'liga' off;
`;

export const TimelineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.69rem;
`;

export const CardWrapper = styled.div`
  transition: top 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
`;

export const CardContentsWrapper = styled.div`
  width: 16.375rem;
  height: 100%;
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

export const CardTitleText = styled.h5`
  color: var(--light-black-black, #000);
  font-feature-settings: 'clig' off, 'liga' off;
  margin-bottom: 1.25rem;
`;

export const CardDescriptionText = styled.p`
  color: var(--light-black-black, #000);
`;

export const TimelineBar = styled.figure`
  width: 2rem;
  height: 61.125rem;
  border-radius: 1rem;
  background: var(--light-gray-gray-050, #f7f7fa);
  margin-bottom: 12rem;
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

export const CardListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
