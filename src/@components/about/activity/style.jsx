import styled from 'styled-components';

export const ActivityWrapper = styled.div`
  height: 100vh;

  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;

  padding: 9.44rem;
`;

export const HeaderTitleText = styled.h2`
  color: var(--light-black-black, #000);
  font-feature-settings: 'clig' off, 'liga' off;
  width: 100%;
  text-align: start;
`;
