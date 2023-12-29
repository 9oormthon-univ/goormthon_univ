import React, { useEffect, useState } from 'react';
import RecuritCautionRowBox from '../recuritCautionRowBox/RecuritCautionRowBox';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const CautionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 1rem;
`;

const BodyTitle = styled.h2`
  color: #000;
  font-feature-settings: 'clig' off, 'liga' off;
  margin-bottom: 2.25rem;
`;

function RecruitCaution() {
  const [visibleBoxes, setVisibleBoxes] = useState({
    box0: false,
    box1: false,
    box2: false,
    box3: false,
    box4: false,
    box5: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setVisibleBoxes({
        box0: scrollY >= 900,
        box1: scrollY >= 1100,
        box2: scrollY >= 1150,
        box3: scrollY >= 1200,
        box4: scrollY >= 1250,
        box5: scrollY >= 1300,
        box6: scrollY >= 1350,
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={visibleBoxes.box0 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.85 }}
      >
        <BodyTitle>유의사항</BodyTitle>
      </motion.div>

      <CautionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={visibleBoxes.box1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.85 }}
        >
          <RecuritCautionRowBox title="활동기간" detail="2월부터 8월까지 운영 가능해야 합니다." />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={visibleBoxes.box2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.85 }}
        >
          <RecuritCautionRowBox title="성실함" detail="대표로서 성실하고 책임감있게 활동해야 합니다." />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={visibleBoxes.box3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.85 }}
        >
          <RecuritCautionRowBox
            title="모집"
            detail="최소 6명(기획1,디자인1,백엔드2,프론트2)에서 최대 12명(기획2,디자인2,백엔드4,프론트4) 모집 가능합니다."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={visibleBoxes.box4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.85 }}
        >
          <RecuritCautionRowBox
            title="모집 마감일 준수"
            detail="교내 학생 및 운영진 모집 마감일은 2월 11일까지입니다."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={visibleBoxes.box5 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.85 }}
        >
          <RecuritCautionRowBox title="중앙행사 참여" detail="OT와 벚꽃톤은 필수적으로 참여해야 합니다." />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={visibleBoxes.box6 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.85 }}
        >
          <RecuritCautionRowBox
            title="대표 미팅"
            detail="매달 첫째 주에 진행되는 대표 미팅에 참여가 가능해야 합니다."
          />
        </motion.div>
      </CautionWrapper>
    </>
  );
}

export default RecruitCaution;
