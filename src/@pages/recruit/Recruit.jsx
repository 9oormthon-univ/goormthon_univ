import React, { useEffect, useState } from 'react';
import RecuritHeader from '../../@components/recruit/recuritHeader/RecuritHeader';
import RecuritTarget from '../../@components/recruit/recuritTarget/RecuritTarget';
import * as S from './style';
import { motion, useAnimation } from 'framer-motion';
import RecuritFAQ from '../../@components/recruit/recruitFAQ/RecruitFAQ';
import RecruitCaution from '../../@components/recruit/recruitCaution/RecruitCaution';
import RecuritCalendar from '../../@components/recruit/recruitCalendar/RecuritCalendar';

export default function Recruit() {
  return (
    <>
      <RecuritHeader />
      <S.RecuritBody>
        {/* ---------------- 지원 대상 ---------------- */}
        <RecuritTarget />
        {/* ---------------- 모집일정 ---------------- */}
        <RecuritCalendar />
        {/* ---------------- 유의 사항 ---------------- */}
        <S.RecuritCautionWrapper>
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
