import React from 'react';
import * as S from './style';

import CardBar from '../../../../assets/svgs/card_bar.svg';

export default function Card({ data, $month }) {
  const { Icon, title, description } = data;

  return (
    <S.CardWrapper $month={$month}>
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
