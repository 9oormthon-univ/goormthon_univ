import styled from 'styled-components';

export const PlanWrapper = styled.div`
  @media screen and (min-width: 0px) {
    padding: 6.25rem 0 5rem;
  }

  /* container-md */
  @media screen and (min-width: 768px) {
    @supports (height: 100dvh) {
      height: 100dvh;
    }
  }

  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  align-items: center;
  justify-content: center;
  background-color: var(--gray-100);

  padding: 0 1rem;
`;

export const TitleText = styled.h3`
  text-align: center;

  /* container-xs */
  @media screen and (min-width: 0px) {
    margin-bottom: 2rem;
  }

  /* container-md */
  @media screen and (min-width: 768px) {
    margin: 0;
    margin-bottom: var(--size-500);
  }
`;

export const TimelineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: var(--space-500);
`;

export const CardWrapper = styled.div`
  transition: top 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
`;

export const CardContentsWrapper = styled.div`
  width: 16.375rem;
  height: 100%;
  background-color: ${({ $isSelected }) => ($isSelected ? '#fff' : 'var(--gray-200)')};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;

  & > h5,
  & > p {
    color: ${({ $isSelected }) => ($isSelected ? '#000' : 'var(--info)')};
  }

  & svg > path {
    fill: ${({ $isSelected }) => ($isSelected ? '#000' : 'var(--info)')};
  }

  border: ${({ $isSelected }) => $isSelected && '2px solid var(--blue-500)'};
`;

export const IconWrapper = styled.div`
  margin-bottom: 0.25rem;
  & > svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const CardTitleText = styled.h5`
  margin-bottom: 1rem;
`;

export const CardDescriptionText = styled.p`
  margin: 0;
`;

export const TimelineBar = styled.figure`
  border-radius: 1.65625rem;
  background: var(--gray-050);
  position: relative;
  margin: 0;

  /* container-xs */
  @media screen and (min-width: 0px) {
    height: 67.5rem;
  }

  /* container-md */
  @media screen and (min-width: 768px) {
    height: 32.9375rem;
  }
`;

export const TimelineFillBar = styled.div`
  width: -webkit-fill-available;

  /* container-xs */
  @media screen and (min-width: 0px) {
    height: ${({ $fillRatioXs }) => $fillRatioXs}%;
  }
  /* container-md */
  @media screen and (min-width: 768px) {
    height: ${({ $fillRatioMd }) => $fillRatioMd}%;
  }

  background-color: var(--blue-500);
  border-radius: 1.75rem;
  position: absolute;
  transition: height 0.5s ease-in-out;
`;

export const MonthTextWrapper = styled.div`
  width: 100%;
  height: 100%;

  /* container-xs */
  @media screen and (min-width: 0px) {
    padding: 3.56rem 0 4.5rem;
  }
  /* container-md */
  @media screen and (min-width: 768px) {
    padding: 2.06rem 0 2.63rem;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const MonthTextClickable = styled.h5`
  margin: 0;
  cursor: pointer;
  color: var(--gray-400);

  width: 3.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  &.active,
  &.prev {
    color: var(--gray-000);
  }
`;

export const CardListWrapper = styled.div`
  width: 100%;
  display: grid;

  gap: 1rem;

  /* conainer-xs */
  @media screen and (min-width: 0px) {
    grid-template-columns: 1fr;
  }

  /* conainer-md */
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;
