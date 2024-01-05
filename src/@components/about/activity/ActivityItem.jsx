import React from 'react';

import * as S from './style';

export default function ActivityItem({ idx, imgSrc, title, title_en, description }) {
  const renderAnswer = (answer) => {
    return answer.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };
  return (
    <S.ActivityItemWrapper $idx={idx}>
      <S.ContentBox>
        <S.ContentTitleWrapper>
          <S.ContentTitleText>{title}</S.ContentTitleText>
          <S.ContentEnTitleText>{title_en}</S.ContentEnTitleText>
        </S.ContentTitleWrapper>
        <S.ContentDescriptionText>{renderAnswer(description)}</S.ContentDescriptionText>
      </S.ContentBox>
      <S.ContentImg src={imgSrc} />
    </S.ActivityItemWrapper>
  );
}
