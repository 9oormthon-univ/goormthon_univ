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
  @media screen and (max-width: 479px) {
    margin-top: 5.81rem;
  }
`;

export const ActivityItemWrapper = styled.div`
  display: flex;
  gap: 1rem;

  /* flex-flow: ${({ $idx }) => ($idx === 2 ? 'unset' : '')}; */
    flex-direction: column;
    flex-flow: column-reverse;
  /* @media screen and (max-width: 1278px) {
    flex-direction: column;
    flex-flow: column-reverse;
  } */
`;

export const ActivityListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  width: 100%;
  margin-top: 3.94rem;
  margin-bottom: 14.81rem;

  /* Adjust the gap as needed for responsiveness */
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;

    gap: 3.94rem;
  }

  @media screen and (max-width: 479px) {
    margin-bottom: 5.81rem;
  }
`;
export const ContentBox = styled.article`
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;

  height: 8.75rem;
  min-width: 21rem;

  /* @media screen and (max-width: 1278px) {
    height: 100%;
  } */
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
  width: 100%;
  max-width: 100%;
  /* @media screen and (max-width: 1278px) {
    width: 100%;
    max-width: 100%;
  }
  max-width: 30.75rem; */
`;
