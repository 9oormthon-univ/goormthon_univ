import styled from 'styled-components';

export const PlanWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  background-color: var(--light-gray-gray-100, #f0f0f5);
`;

export const TitleText = styled.h2`
  color: var(--light-black-black, #000);
  font-feature-settings: 'clig' off, 'liga' off;
`;

export const CardWrapper = styled.div`
  width: 22.75rem;
  height: 10.375rem;
  background: var(--light-white-white-light, #fff);
  border-radius: 1rem;
`;
