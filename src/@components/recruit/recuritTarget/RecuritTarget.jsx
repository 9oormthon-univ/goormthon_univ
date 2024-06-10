import React, { useEffect, useState } from 'react';
import * as S from './style';
import { SchoolIcon, CalendarIcon, GroupIcon } from '@goorm-dev/gds-icons';

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
      <S.TargetTitle className="mb-3">대표 및 미르미 지원 대상</S.TargetTitle>
      <S.TargetDetail className="mb-4">
        : IT 서비스에 구현에 관심 많고 교외 다른 파트 친구들과 협업하고 싶은 사람
      </S.TargetDetail>
      <S.TargetRowDetailWrapper className="d-flex">
        <S.TargetRowDetailBox
          initial={{ opacity: 0, y: 100 }}
          animate={visibleBoxes.box1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.85 }}
          className="d-flex flex-row align-items-center justify-content-start"
        >
          {/* icon */}
          <SchoolIcon className="SchoolIcon__icon" color="black" width="20px" height="20px" />
          <S.TargetDetailBoxText>대학 재학 및 휴학중인 사람</S.TargetDetailBoxText>
          {/* text */}
        </S.TargetRowDetailBox>
        <S.TargetRowDetailBox
          initial={{ opacity: 0, y: 100 }}
          animate={visibleBoxes.box2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.85 }}
        >
          {/* icon */}
          <CalendarIcon className="CalendarIcon__icon" color="black" width="20px" height="20px" />
          <S.TargetDetailBoxText>6월부터 12월까지 활동이 가능한 사람</S.TargetDetailBoxText>
          {/* text */}
        </S.TargetRowDetailBox>
        <S.TargetRowDetailBox
          initial={{ opacity: 0, y: 100 }}
          animate={visibleBoxes.box3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.85 }}
        >
          {/* icon */}
          <GroupIcon className="GroupIcon__icon" color="black" width="20px" height="20px" />
          <S.TargetDetailBoxText>열정과 성실함이 비례해서 넘치는 사람</S.TargetDetailBoxText>
          {/* text */}
        </S.TargetRowDetailBox>
      </S.TargetRowDetailWrapper>
    </S.TargetContainer>
  );
}

export default RecuritTarget;
