import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RecuritCautionRowBox from '../recuritCautionRowBox/RecuritCautionRowBox';

const CautionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const BodyTitle = styled.h2`
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
          <RecuritCautionRowBox title="활동 기간" detail={`6월부터 12월까지 \n 활동 가능해야 합니다.`} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={visibleBoxes.box2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.85 }}
        >
          <RecuritCautionRowBox title="스터디" detail="유니브별로 진행되는 스터디에 성실하게 참여해야 합니다." />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={visibleBoxes.box3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.85 }}
        >
          <RecuritCautionRowBox
            title="KDC/KDT"
            detail="3,4학년은 KDC/KDT 수강 가능생으로 1,2학년은 자유 모집가능합니다."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={visibleBoxes.box4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.85 }}
        >
          <RecuritCautionRowBox title="행사 참여" detail="OT와 단풍톤에 필수적으로 참여해야 합니다." />
        </motion.div>
      </CautionWrapper>
    </>
  );
}

export default RecruitCaution;
