import styled from 'styled-components';

export const AboutWrapper = styled.div`
  width: 100%;
  overflow: hidden;

  & #plan-mobile {
    display: none;
  }

  @media screen and (max-width: 768px) {
    & #plan-desktop {
      display: none;
    }
    & #plan-mobile {
      display: flex;
    }
  }
`;
