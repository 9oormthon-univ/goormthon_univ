import React, { useState, useEffect } from 'react';
import * as S from './style';
import { Collapse } from '@goorm-dev/gds-components';
import { ChevronDownIcon, ChevronUpIcon } from '@goorm-dev/gds-icons';
import FAQData from '../../../utilities/FAQData';
import { motion } from 'framer-motion';

function RecuritFAQ() {
  const [isOpen, setIsOpen] = useState(null);
  const [visibleBoxes, setVisibleBoxes] = useState({
    box0: false,
    box1: false,
  });

  const toggle = (id) => {
    if (isOpen === id) {
      setIsOpen(null);
    } else {
      setIsOpen(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // 스크롤 위치에 따라 isVisible 상태를 설정
      setVisibleBoxes({
        box0: scrollY >= 1450,
        box1: scrollY >= 1550,
      });
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderAnswer = (answer) => {
    return answer.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={visibleBoxes.box0 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.85 }}
      >
        <S.BodyTitle>자주 묻는 질문</S.BodyTitle>
      </motion.div>

      <S.RecuritFAQWrapper
        initial={{ opacity: 0, y: 100 }}
        animate={visibleBoxes.box1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.85 }}
      >
        {FAQData.map(({ id, question, answer }) => (
          <S.FAQBox key={id}>
            <S.QuestionWrapper
              onClick={() => toggle(id)}
              className="w-100 d-flex flex-direction-row justify-content-between align-items-center"
            >
              <S.QuestionText>{question}</S.QuestionText>
              {isOpen === id ? (
                <ChevronUpIcon className="ChevronUpIcon__icon" color="#525463" />
              ) : (
                <ChevronDownIcon className="ChevronDownIcon__icon" color="#525463" />
              )}
            </S.QuestionWrapper>
            <Collapse isOpen={isOpen === id}>
              <S.AnswerText>{renderAnswer(answer)}</S.AnswerText>
            </Collapse>
          </S.FAQBox>
        ))}
      </S.RecuritFAQWrapper>
    </>
  );
}

export default RecuritFAQ;
