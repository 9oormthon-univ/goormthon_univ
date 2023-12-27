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

export const RecuritCalendarImg = styled.img`
  width: 100%;
  flex-shrink: 0;
`;
export const RecuritCalendarWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-bottom: 9.81rem;
  border: 1px solid green;
`;

export const RecuritCautionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-bottom: 9.37rem;
  border: 1px solid green;
`;

export const CautionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 1rem;
`;

export const RecuritFAQWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-bottom: 11rem;
  border: 1px solid orange;
`;
