import React from 'react';
import * as S from './style';

import GoormieeImg from '../../../assets/svgs/goormiee.svg';
import GoormieeSmallImg from '../../../assets/svgs/goormiee_small.svg';

export default function MainBanner({ scrollTrigger }) {
  return (
    <S.MainBannerWrapper>
      <S.GhostDiv></S.GhostDiv> {/* space-between 맞추기용 빈 태그 */}
      <S.HeaderTextWrapper>
        <S.HeaderTitleText>Being All Seasons with goorm</S.HeaderTitleText>
        <S.HeaderDescriptionText>사계절, 구름과 함께</S.HeaderDescriptionText>
      </S.HeaderTextWrapper>
      <S.MainImgWrapper>
        <S.MainImg src={GoormieeImg} />
        <S.MainImgSmall src={GoormieeImg} />
        <S.AnimatedGoormieeEffect onClick={scrollTrigger} />
        <S.AnimatedGoormieeEffectSmall onClick={scrollTrigger} />
      </S.MainImgWrapper>
    </S.MainBannerWrapper>
  );
}
