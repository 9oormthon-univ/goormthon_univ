import React, { useEffect, useState } from 'react';
import * as S from './style';
import './style.css';
import { useNavigate } from 'react-router-dom';
import RecruitUnivScrolling from '../recruitUnivScrolling/RecruitUnivScrolling';

function RecuritHeader() {
  const [daysRemaining, setDaysRemaining] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // 목표 날짜 설정 (24년 1월 12일)
    const targetDate = new Date('2024-01-13');

    // 현재 날짜 가져오기
    const currentDate = new Date();

    // 남은 날짜 계산
    const timeRemaining = targetDate - currentDate;
    const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

    setDaysRemaining(daysRemaining);
  }, []);
  return (
    <S.HeaderContainer>
      <S.HeaderTitleWrapper>
        <S.HeaderTitleText>
          구름톤 유니브 2기 모집 중!
          <h4>D-{daysRemaining}</h4>
        </S.HeaderTitleText>
        <S.GoormBtn color="primary" size="xl" tag="button" onClick={() => navigate('/apply')}>
          유니브 대표 신청
        </S.GoormBtn>
      </S.HeaderTitleWrapper>
      <S.HeaderUnivContainer>
        <S.HeaderUnivTitleText>현재 함께하는 유니브 10개</S.HeaderUnivTitleText>
        <S.HeaderUnivListContainer>
          <RecruitUnivScrolling />
        </S.HeaderUnivListContainer>
      </S.HeaderUnivContainer>
    </S.HeaderContainer>
  );
}

export default RecuritHeader;
