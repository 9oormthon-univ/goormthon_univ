import React from 'react';
import * as S from './style';
import MainBannerSlogan from '../../../assets/svgs/main_banner_slogan.svg';

export default function MainBanner({ scrollTrigger }) {
  return (
    <S.MainBannerWrapper className="-container-xl-">
      <S.HeaderTextWrapper>
        <S.HeaderDescriptionText>사계절, 구름과 함께</S.HeaderDescriptionText>
        <S.HeaderDescriptionTextSmall>사계절, 구름과 함께</S.HeaderDescriptionTextSmall>
        <S.HeaderTitle src={MainBannerSlogan} />
      </S.HeaderTextWrapper>
      <S.MainImgWrapper>
        <S.MainImg onClick={scrollTrigger} />
        <S.MainSmallImg onClick={scrollTrigger} />
      </S.MainImgWrapper>
    </S.MainBannerWrapper>
  );
}
