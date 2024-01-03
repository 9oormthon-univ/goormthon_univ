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
  color: var(--light-black-black, #000);
  font-feature-settings: 'clig' off, 'liga' off;
  width: 100%;
  text-align: start;
  margin-top: 10.19rem;
  @media screen and (max-width: 479px) {
    margin-top: 5.81rem;
  }
`;

export const ActivityItemWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-flow: ${({ $idx }) => ($idx % 2 === 0 ? 'unset' : 'row-reverse')};

  @media screen and (max-width: 1278px) {
    flex-direction: column;
    flex-flow: column-reverse;
  }
`;

export const ActivityListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15.31rem;
  width: 100%;
  margin-top: 3.94rem;
  margin-bottom: 14.81rem;

  @media screen and (max-width: 768px) {
    gap: 3.94rem;
  }

  @media screen and (max-width: 479px) {
    margin-bottom: 5.81rem;
  }
`;

export const ContentBox = styled.article`
  padding: 1.5rem;
  border-radius: 0.5rem;

  border: 1px solid var(--light-gray-gray-300, #e1e1e8);
  background: #fff;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 10.75rem;
  min-width: 21rem;

  @media screen and (max-width: 1278px) {
    height: 100%;
  }
`;

export const ContentTitleWrapper = styled.div`
  display: flex;
  gap: 1.06rem;
  align-items: center;
`;

export const ContentTitleText = styled.h3`
  color: var(--light-black-black, #000);
  font-feature-settings: 'clig' off, 'liga' off;
`;

export const ContentEnTitleText = styled.h6`
  color: var(--light-black-black, #000);
  font-feature-settings: 'clig' off, 'liga' off;
`;

export const ContentDescriptionText = styled.p`
  color: var(--light-black-black, #000);
  font-feature-settings: 'clig' off, 'liga' off;
  max-width: 30rem;
`;

export const ContentImg = styled.img`
  @media screen and (max-width: 1278px) {
    width: 100%;
    max-width: 100%;
  }
  max-width: 39.75rem;
`;
