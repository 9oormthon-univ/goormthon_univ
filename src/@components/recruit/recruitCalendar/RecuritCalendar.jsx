import React, { useEffect, useState } from 'react';
import * as S from './style';
import { motion } from 'framer-motion';
import DefaultImg from '../../../assets/images/calendar.png';

function RecuritCalendar() {
  const [visibleBoxes, setVisibleBoxes] = useState({
    calendarTitle: false,
    calendarImg: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // 스크롤 위치에 따라 isVisible 상태를 설정
      setVisibleBoxes({
        calendarTitle: scrollY >= 500,
        calendarImg: scrollY >= 600,
      });
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
      <S.RecuritCalendarWrapper className="w-100 d-flex flex-column justify-content-center align-items-start ">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={visibleBoxes.calendarTitle ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.85 }}
        >
          <S.BodyTitle>모집일정</S.BodyTitle>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={visibleBoxes.calendarImg ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.85 }}
        >
          <S.RecuritCalendarImg src={DefaultImg} />
        </motion.div>
      </S.RecuritCalendarWrapper>
    </>
  );
}

export default RecuritCalendar;
