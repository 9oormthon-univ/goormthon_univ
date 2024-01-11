import React from 'react';
import RecuritHeader from '../../@components/recruit/recuritHeader/RecuritHeader';
import RecuritTarget from '../../@components/recruit/recuritTarget/RecuritTarget';
import * as S from './style';
import RecuritFAQ from '../../@components/recruit/recruitFAQ/RecruitFAQ';
import RecruitCaution from '../../@components/recruit/recruitCaution/RecruitCaution';
import RecuritCalendar from '../../@components/recruit/recruitCalendar/RecuritCalendar';

export default function Recruit() {
  return (
    <>
      <RecuritHeader />
      <S.RecuritBody className="col-10 d-flex flex-column justify-content-start align-items-center">
        {/* ---------------- 지원 대상 ---------------- */}
        <RecuritTarget />
        {/* ---------------- 모집일정 ---------------- */}
        <RecuritCalendar />
        {/* ---------------- 유의 사항 ---------------- */}
        <S.RecuritCautionWrapper className="w-100 d-flex flex-column justify-content-center align-items-start">
          <RecruitCaution />
        </S.RecuritCautionWrapper>
        {/* ---------------- 자주 묻는 질문 ---------------- */}
        <S.RecuritFAQContainer className="w-100 d-flex flex-column justify-content-center align-items-start">
          <RecuritFAQ />
        </S.RecuritFAQContainer>
      </S.RecuritBody>
    </>
  );
}
