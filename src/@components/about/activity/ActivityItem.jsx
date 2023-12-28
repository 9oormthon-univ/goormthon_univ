import React from 'react';

import * as S from './style';

export default function ActivityItem({ idx, imgSrc, title, title_en, description }) {
  return (
    <S.ActivityItemWrapper $idx={idx}>
      <S.ContentBox>
        <S.ContentTitleWrapper>
          <S.ContentTitleText>{title}</S.ContentTitleText>
          <S.ContentEnTitleText>{title_en}</S.ContentEnTitleText>
        </S.ContentTitleWrapper>
        <S.ContentDescriptionText>{description}</S.ContentDescriptionText>
      </S.ContentBox>
      <S.ContentImg src={imgSrc} />
    </S.ActivityItemWrapper>
  );
}
