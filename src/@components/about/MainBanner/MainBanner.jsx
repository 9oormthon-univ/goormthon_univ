import React from 'react';
import * as S from './style';

import GoormieeImg from '../../../assets/svgs/goormiee.svg';
import GoormieeEffectImg from '../../../assets/svgs/goormiee_effect.svg';

export default function About() {
  return (
    <S.MainBannerWrapper>
      <S.HeaderTextWrapper>
        <S.HeaderTitleText>Being All Seasons with goorm</S.HeaderTitleText>
        <S.HeaderDescriptionText>사계절, 구름과 함께</S.HeaderDescriptionText>
      </S.HeaderTextWrapper>
      <S.MainImgWrapper>
        <S.EffectImg src={GoormieeEffectImg} />
        <S.MainImg src={GoormieeImg} />
      </S.MainImgWrapper>
    </S.MainBannerWrapper>
  );
}
