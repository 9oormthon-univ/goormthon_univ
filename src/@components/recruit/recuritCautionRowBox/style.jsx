import styled from 'styled-components';

export const CautionRowBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 0.2rem;
  }
`;

export const CautionTitle = styled.sub`
  color: #000;
  font-feature-settings: 'clig' off, 'liga' off;
  display: flex;
  justify-content: center;
  align-items: center;

  /* KOR/subtitle-1ㅣ0.875rem */
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem; /* 157.143% */
  letter-spacing: -0.00625rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  width: 7.1875rem;
  border-radius: 0.5rem;
  background: var(--light-gray-gray-100, #f0f0f5);
  margin-right: 0.94rem;
`;

export const CautionDetail = styled.sub`
  color: #000;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.25rem; /* 225% */
  letter-spacing: -0.00625rem;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
