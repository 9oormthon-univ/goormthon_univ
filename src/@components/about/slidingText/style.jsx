import styled from 'styled-components';

export const SlidingTextWrapper = styled.aside`
  background-color: var(--black);
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Text = styled.h1`
  text-align: center;
  font-family: Poppins;
  font-size: 2.375rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.5625rem;
  letter-spacing: -0.025rem;
  margin-bottom: 0;
`;

export const ThemeTextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.56rem;
`;

export const Img = styled.img`
  width: 'max-contents';
  height: 'max-contents';
`;

export const TextContentWrapper = styled.div`
  display: flex;
  gap: 0.56rem;
  flex: 0 0 auto;
  white-space: nowrap;
  overflow: hidden;
  transition: 0.3s;

  & > div {
    display: flex;
    gap: 0.56rem;
    animation: textLoop 5s linear infinite;
  }

  @keyframes textLoop {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    100% {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
  }
`;
