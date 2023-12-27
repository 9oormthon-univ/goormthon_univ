import React, { useState } from 'react';
import RecuritHeader from '../../@components/recruit/recuritHeader/RecuritHeader';
import RecuritTarget from '../../@components/recruit/recuritTarget/RecuritTarget';
import DefaultImg from '../../assets/images/dummy.png';
import * as S from './style';
import RecuritFAQ from '../../@components/recruit/recruitFAQ/RecruitFAQ';
import RecruitCaution from '../../@components/recruit/recruitCaution/RecruitCaution';
export default function Recruit() {
  return (
    <>
      <RecuritHeader />
      <S.RecuritBody>
        {/* ---------------- 지원 대상 ---------------- */}
        <RecuritTarget />
        {/* ---------------- 모집일정 ---------------- */}
        <S.RecuritCalendarWrapper>
          <S.BodyTitle>모집일정</S.BodyTitle>
          <S.RecuritCalendarImg src={DefaultImg}></S.RecuritCalendarImg>
        </S.RecuritCalendarWrapper>
        {/* ---------------- 유의 사항 ---------------- */}
        <S.RecuritCautionWrapper>
          <S.BodyTitle>유의사항</S.BodyTitle>
          <RecruitCaution />
        </S.RecuritCautionWrapper>
        {/* ---------------- 자주 묻는 질문 ---------------- */}
        <S.RecuritFAQContainer>
          <S.BodyTitle>자주 묻는 질문</S.BodyTitle>
          <RecuritFAQ />
        </S.RecuritFAQContainer>
      </S.RecuritBody>
    </>
  );
}
