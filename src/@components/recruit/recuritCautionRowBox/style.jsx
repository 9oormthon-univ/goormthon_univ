import styled from 'styled-components';

export const CautionRowBox = styled.div`
  display: flex;
  width: 35rem;
  height: 7rem;
  padding: 1.25rem;
  border-radius: 0.5rem;
  border: 1px solid var(--gray-300);
  background: var(--white-light);

  @media (max-width: 1401px) {
    width: 23rem;
  }

  @media (max-width: 1055px) {
    width: 100%;
  }
  width: 35rem;
  height: 7rem;
  padding: 1.25rem;
  border-radius: 0.5rem;
  border: 1px solid var(--gray-300);
  background: var(--white-light);

  @media (max-width: 1401px) {
    width: 23rem;
  }

  @media (max-width: 1055px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: start;
    flex-basis: 50%;
    gap: 0.2rem;
  }
`;

export const CautionTitle = styled.sub`
  color: #000;

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

export const CautionDetail = styled.div``;

export const TitleText = styled.p`
  /* KOR/H5ㅣ1.125rem */
  font-family: Pretendard;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.6875rem; /* 150% */
  letter-spacing: -0.00625rem;
`;
export const ContentsText = styled.p`
  /* KOR/paragraph-lgㅣ1rem */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 150% */
  letter-spacing: -0.00625rem;
`;
