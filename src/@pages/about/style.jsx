import styled from 'styled-components';

export const AboutWrapper = styled.div`
  width: 100%;
  overflow: hidden;

  /* container-md, xs */
  @media screen and (min-width: 0px) {
    & #plan-desktop {
      display: none;
    }
    & #plan-mobile {
      display: flex;
    }
  }

  /* container-xl */
  @media screen and (min-width: 1200px) {
    & #plan-desktop {
      display: flex;
    }
    & #plan-mobile {
      display: none;
    }
  }
`;
