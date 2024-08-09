import { CalendarIcon, GroupIcon, SchoolIcon } from '@goorm-dev/gds-icons';
import React, { useEffect, useState } from 'react';
import * as S from './style';

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
      className="w-100 flex-column"
    >
      <S.TargetTitle className="mb-3">3기 지원 대상</S.TargetTitle>
      <S.TargetRowDetailWrapper className="d-flex">
        <S.TargetRowDetailBox
          initial={{ opacity: 0, y: 100 }}
          animate={visibleBoxes.box1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.85 }}
          className="d-flex flex-row align-items-center justify-content-start"
        >
          {/* icon */}
          <SchoolIcon className="SchoolIcon__icon" color="black" width="20px" height="20px" />
          <S.TargetDetailBoxText>IT 서비스의 구현에 관심이 많은 대학생</S.TargetDetailBoxText>
          {/* text */}
        </S.TargetRowDetailBox>
        <S.TargetRowDetailBox
          initial={{ opacity: 0, y: 100 }}
          animate={visibleBoxes.box2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.85 }}
        >
          {/* icon */}
          <CalendarIcon className="CalendarIcon__icon" color="black" width="20px" height="20px" />
          <S.TargetDetailBoxText>타학교 친구들과 협업 경험을 쌓고 싶은 대학생</S.TargetDetailBoxText>
          {/* text */}
        </S.TargetRowDetailBox>
        <S.TargetRowDetailBox
          initial={{ opacity: 0, y: 100 }}
          animate={visibleBoxes.box3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.85 }}
        >
          {/* icon */}
          <GroupIcon className="GroupIcon__icon" color="black" width="20px" height="20px" />
          <S.TargetDetailBoxText>열정과 성실함이 넘치는 대학생</S.TargetDetailBoxText>
          {/* text */}
        </S.TargetRowDetailBox>
      </S.TargetRowDetailWrapper>
    </S.TargetContainer>
  );
}

export default RecuritTarget;
