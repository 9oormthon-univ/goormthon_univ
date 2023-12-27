import React, { useState } from 'react';
import * as S from './style';
import { Collapse } from '@goorm-dev/gds-components';
import { ChevronDownIcon, ChevronUpIcon } from '@goorm-dev/gds-icons';
import FAQData from '../../../utilities/FAQData';

function RecuritFAQ() {
  const [isOpen, setIsOpen] = useState(null);

  const toggle = (id) => {
    if (isOpen === id) {
      setIsOpen(null);
    } else {
      setIsOpen(id);
    }
  };

  const renderAnswer = (answer) => {
    return answer.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  return (
    <S.RecuritFAQWrapper>
      {FAQData.map(({ id, question, answer }) => (
        <S.FAQBox key={id}>
          <S.QuestionWrapper onClick={() => toggle(id)}>
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
  );
}

export default RecuritFAQ;
