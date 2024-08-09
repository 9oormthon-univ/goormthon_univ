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

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    flex-basis: 50%;
    gap: 0.2rem;
  }
`;

export const CautionTitle = styled.div`
  width: 30%;
  margin-right: var(--space-600);
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
