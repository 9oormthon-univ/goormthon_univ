import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BenefitWrapper = styled.div`
  height: 100vh;
  @supports (height: 100dvh) {
    height: 100dvh;
  }

  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;

  /* container-xs */
  @media screen and (min-width: 0px) {
    display: none;
  }
  /* container-md */
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const HeaderTitleText = styled.h2`
  width: 71.25rem;

  text-align: start;
  position: absolute;
  top: 18%;

  display: none;
  @media screen and (min-width: 1200px) {
    display: block;
  }
`;

export const HeaderTitleTextSmall = styled.h3`
  width: 43rem;

  text-align: start;
  position: absolute;
  top: 18%;

  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const BenefitItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BenefitImgWrapper = styled.div`
  background-color: ${({ $bgColor }) => $bgColor};
  width: 19rem;
  height: 13.6rem;
  border-radius: 1rem 1rem 0rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BenefitImg = styled.img`
  width: max-content;
  height: max-content;
  transition: transform 0.5s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export const BenefitContentsWrapper = styled.div`
  background-color: var(--light);
  border-radius: 0rem 0rem var(--space-500) var(--space-500);
  border: 1px solid var(--gray-300);
  width: 19rem;
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 1.25rem;
`;

export const BenefitTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const BenefitTitle = styled.h3`
  width: 100%;
  text-align: left;
`;

export const BenefitDescription = styled.p`
  color: #000;
  width: 100%;
  text-align: left;
  white-space: pre-wrap;
`;

export const Icon = styled.img`
  width: var(--size-500);
  height: var(--size-500);
`;

export const BenefitLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;
