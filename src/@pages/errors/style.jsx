import { styled } from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #f5f5f5;
`;

export const MainTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #333;
`;

export const MainDescription = styled.p`
  font-size: 1.5rem;
`;

export const MainSubDescription = styled.p`
  font-size: 1rem;
  color: grey;
`;
