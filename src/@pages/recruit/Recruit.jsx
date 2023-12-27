import React, { useEffect, useState } from 'react';
import RecuritHeader from '../../@components/recruit/recuritHeader/RecuritHeader';
import RecuritTarget from '../../@components/recruit/recuritTarget/RecuritTarget';
import DefaultImg from '../../assets/images/dummy.png';
import * as S from './style';
import { motion, useAnimation } from 'framer-motion';
import RecuritFAQ from '../../@components/recruit/recruitFAQ/RecruitFAQ';
import RecruitCaution from '../../@components/recruit/recruitCaution/RecruitCaution';

export default function Recruit() {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      // 스크롤 위치에 따라 isVisible 상태를 설정
      if (scrollY >= 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <RecuritHeader />
      <S.RecuritBody>
        {/* ---------------- 지원 대상 ---------------- */}
        <RecuritTarget />
        {/* ---------------- 모집일정 ---------------- */}
        <S.RecuritCalendarWrapper>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <S.BodyTitle>모집일정</S.BodyTitle>
            <S.RecuritCalendarImg src={DefaultImg}></S.RecuritCalendarImg>
          </motion.div>
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
