import React, { useState } from 'react';
import * as S from './style';

import BeotkkotImg from '../../../assets/images/about/img-beotkkot-default.png';
import GoormImg from '../../../assets/images/about/img-goorm-default.png';
import DanpoongImg from '../../../assets/images/about/img-danpoong-default.png';

import BeotkkotHoverImg from '../../../assets/images/about/img-beotkkot-hover.png';
import GoormHoverImg from '../../../assets/images/about/img-goorm-hover.png';
import DanpoongHoverImg from '../../../assets/images/about/img-danpoong-hover.png';

import MainCloudUpImg from '../../../assets/svgs/main-cloud-up.svg';

export default function Intro({ scrollTarget }) {
  return (
    <S.IntroWrapper
      ref={scrollTarget}
      className="h-100 position-relative d-flex flex-column justify-contents-center align-items-center"
    >
      <S.MainCloudUpImg url={MainCloudUpImg} className="w-100 position-absolute" />
      <S.HeaderTitleText className="d-none d-md-block text-align-center mt-4">9oormthonUNIV 는</S.HeaderTitleText>
      <S.HeaderTitleTextSmall className="d-block d-md-none text-align-center mt-4">
        9oormthonUNIV 는
      </S.HeaderTitleTextSmall>
      <S.HeaderTextWrapper className="d-flex flex-column">
        <S.HeaderDescriptionText className="d-none d-md-block">
          봄과 가을을 기수로 하여
          <br />
          아이디어 실현의 장을 제공 해주는 IT 연합 동아리 입니다.
        </S.HeaderDescriptionText>
        <S.HeaderDescriptionTextSmall className="d-block d-md-none">
          봄과 가을을 기수로 하여
          <br />
          아이디어 실현의 장을 제공 해주는 IT 연합 동아리 입니다.
        </S.HeaderDescriptionTextSmall>
      </S.HeaderTextWrapper>
      <S.ImgsWrapper className="w-100 d-flex justify-content-center">
        <S.Imgs>
          <S.ImgsSetWrapper className="beotkkot position-relative">
            <S.Img src={BeotkkotImg} className="position-absolute w-100 h-100" />
            <S.Img src={BeotkkotHoverImg} className="hover-img position-absolute w-100 h-100" />
          </S.ImgsSetWrapper>
          <S.ImgsSetWrapper className="goorm position-relative">
            <S.Img src={GoormImg} className="position-absolute w-100 h-100" />
            <S.Img src={GoormHoverImg} className="hover-img position-absolute w-100 h-100" />
          </S.ImgsSetWrapper>
          <S.ImgsSetWrapper className="danpoong position-relative">
            <S.Img src={DanpoongImg} className="position-absolute w-100 h-100" />
            <S.Img src={DanpoongHoverImg} className="hover-img position-absolute w-100 h-100" />
          </S.ImgsSetWrapper>
        </S.Imgs>
      </S.ImgsWrapper>
    </S.IntroWrapper>
  );
}
