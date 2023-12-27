import styled from 'styled-components';

export const RecuritBody = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border: 1px solid blue;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const BodyTitle = styled.h2`
  color: #000;
  font-feature-settings: 'clig' off, 'liga' off;
  margin-bottom: 2.25rem;
`;
