import React from 'react';
import * as S from './style';

export default function BenefitItem({ imgSrc, iconSrc, bgColor, title, description }) {
  return (
    <S.BenefitItemWrapper>
      <S.BenefitImgWrapper $bgColor={bgColor}>
        <S.BenefitImg src={imgSrc} />
      </S.BenefitImgWrapper>
      <S.BenefitContentsWrapper>
        <S.BenefitTextWrapper>
          <S.BenefitTitle>{title}</S.BenefitTitle>
          <S.BenefitDescription className="paragraph-lg">{description}</S.BenefitDescription>
        </S.BenefitTextWrapper>
        <S.Icon src={iconSrc} />
      </S.BenefitContentsWrapper>
    </S.BenefitItemWrapper>
  );
}
