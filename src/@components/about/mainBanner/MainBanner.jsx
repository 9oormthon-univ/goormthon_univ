import React from 'react';
import * as S from './style';
import MainBannerSlogan from '../../../assets/svgs/main_banner_slogan.svg';

export default function MainBanner({ scrollTrigger }) {
  return (
    <S.MainBannerWrapper className="d-flex flex-column justify-content-between align-items-center position-fixed w-100">
      <S.HeaderTextWrapper className="d-flex flex-column">
        <S.HeaderDescriptionText className="d-none d-md-block text-center">사계절, 구름과 함께</S.HeaderDescriptionText>
        <S.HeaderDescriptionTextSmall className="d-block d-md-none text-center">
          사계절, 구름과 함께
        </S.HeaderDescriptionTextSmall>
        <S.HeaderTitle src={MainBannerSlogan} />
      </S.HeaderTextWrapper>
      <S.MainImgWrapper className="p-relative">
        <S.MainImg onClick={scrollTrigger} className="d-none d-sm-block position-absolute" />
        <S.MainSmallImg onClick={scrollTrigger} className="d-block d-sm-none position-absolute" />
      </S.MainImgWrapper>
    </S.MainBannerWrapper>
  );
}
