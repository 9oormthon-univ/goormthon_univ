import styled from 'styled-components';

export const ActivityWrapper = styled.div`
  height: 100%;

  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;

  width: 100%;
`;

export const HeaderTitleText = styled.h2`
  width: 100%;
  text-align: center;
  margin-top: 10.19rem;

  /* container-xs, s, md */
  @media screen and (min-width: 0px) {
    display: none;
  }

  /* container-xl */
  @media screen and (min-width: 1200px) {
    display: block;
  }
`;

export const HeaderTitleTextSmall = styled.h3`
  width: 100%;
  text-align: center;
  margin-top: 10.19rem;

  /* container-xs, s, md */
  @media screen and (min-width: 0px) {
    display: block;
  }

  /* container-xl */
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const ActivityItemWrapper = styled.div`
  display: flex;
  gap: 1rem;
  height: 100%;

  flex-direction: column;
  flex-flow: column-reverse;

  @media screen and (min-width: 0px) {
    & img {
      height: ${({ $idx }) => $idx == 2 && '12.125rem'};
    }
  }

  @media screen and (min-width: 1200px) {
    & img {
      height: ${({ $idx }) => $idx == 2 && '20rem'};
    }
  }
`;

export const ActivityListWrapper = styled.div`
  /* container-xs */
  @media screen and (min-width: 0px) {
    width: 20.5rem;
    display: flex;
    flex-direction: column;

    gap: 2rem;
  }

  /* container-md */
  @media screen and (min-width: 768px) {
    width: 43rem;
    display: grid;
    grid-template-areas:
      'activity1 activity2'
      'activity3 activity3'
      'activity4 activity5';

    grid-template-columns: 20.5rem 20.5rem;
    grid-template-rows: 20.25rem 18.625rem 20.25rem;

    &::nth-child(1) {
      grid-area: activity1;
    }
    &::nth-child(2) {
      grid-area: activity2;
    }
    &::nth-child(3) {
      grid-area: activity3;
    }
    &::nth-child(4) {
      grid-area: activity4;
    }
    &::nth-child(5) {
      grid-area: activity5;
    }
  }

  /* container-xl */
  @media screen and (min-width: 1200px) {
    width: 71.125rem;
    justify-content: center;

    grid-template-columns: 34.5625rem 34.5625rem;
    grid-template-rows: 28.25rem 26.75rem 28.25rem;
  }

  margin-top: 3.94rem;
  margin-bottom: 14.81rem;
`;
export const ContentBox = styled.article`
  display: flex;
  flex-direction: column;

  height: 8.75rem;
  min-width: 21rem;
`;

export const ContentTitleWrapper = styled.div`
  display: flex;
  gap: 1.06rem;
  align-items: flex-end;
`;

export const ContentTitleText = styled.h3``;

export const ContentEnTitleText = styled.h6`
  color: var(--info);
`;

export const ContentDescriptionText = styled.p`
  align-self: flex-start;

  max-width: 100%;
`;

export const ContentImg = styled.img`
  object-fit: cover;

  /* container-xs */
  @media screen and (min-width: 0px) {
    border-radius: 1rem;
  }
`;
