import React, { useEffect, useState } from 'react';
import * as S from './style';
import { SchoolIcon, CalendarIcon, GroupIcon } from '@goorm-dev/gds-icons';
import { motion } from 'framer-motion';

function RecuritTarget() {
  const [visibleBoxes, setVisibleBoxes] = useState({
    box0: false,
    box1: false,
    box2: false,
    box3: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setVisibleBoxes({
        box0: scrollY >= 70,
        box1: scrollY >= 100,
        box2: scrollY >= 200,
        box3: scrollY >= 300,
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <S.TargetContainer
      initial={{ opacity: 0, y: 100 }}
      animate={visibleBoxes.box0 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.85 }}
    >
      <S.TargetTitle>학교 대표 지원 대상</S.TargetTitle>
      <S.TargetDetail>: IT 서비스에 관심이 많고 교내 IT 확산을 하고자 하는 사람</S.TargetDetail>
      <S.TargetRowDetailWrapper>
        <S.TargetRowDetailBox
          initial={{ opacity: 0, y: 100 }}
          animate={visibleBoxes.box1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.85 }}
        >
          {/* icon */}
          <SchoolIcon width="2rem" className="SchoolIcon__icon" color="black" />
          <S.TargetDetailBoxText>대학 재학 및 휴학중인 사람</S.TargetDetailBoxText>
          {/* text */}
        </S.TargetRowDetailBox>
        <S.TargetRowDetailBox
          initial={{ opacity: 0, y: 100 }}
          animate={visibleBoxes.box2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.85 }}
        >
          {/* icon */}
          <CalendarIcon width="2rem" className="CalendarIcon__icon" color="black" />
          <S.TargetDetailBoxText>2월부터 8월까지 활동이 가능한 사람</S.TargetDetailBoxText>
          {/* text */}
        </S.TargetRowDetailBox>
        <S.TargetRowDetailBox
          initial={{ opacity: 0, y: 100 }}
          animate={visibleBoxes.box3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.85 }}
        >
          {/* icon */}
          <GroupIcon width="2rem" className="GroupIcon__icon" color="black" />
          <S.TargetDetailBoxText>교내 운영 가능한 사람</S.TargetDetailBoxText>
          {/* text */}
        </S.TargetRowDetailBox>
      </S.TargetRowDetailWrapper>
    </S.TargetContainer>
  );
}

export default RecuritTarget;
