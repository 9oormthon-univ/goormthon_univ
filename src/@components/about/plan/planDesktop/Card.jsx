import React from 'react';
import * as S from './style';

export default function Card({ Icon, title, description, month, idx }) {
  return (
    <S.CardWrapper $month={month}>
      <S.CardContentsWrapper>
        <S.IconWrapper>
          <Icon />
        </S.IconWrapper>
        <S.CardTitleText>{title}</S.CardTitleText>
        <S.CardDescriptionText className="subtitle-1">{description}</S.CardDescriptionText>
      </S.CardContentsWrapper>
    </S.CardWrapper>
  );
}
