import React from 'react';
import * as S from './style';

export default function Card({ data, $yOffset, $month }) {
  const { Icon, title, description } = data;

  return (
    <S.CardWrapper $yOffset={$yOffset} $month={$month}>
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
