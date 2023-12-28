import React from 'react';
import * as S from './style';

import BeotkkotImg from '../../../assets/images/about/img-beotkkot-default.png';
import GoormImg from '../../../assets/images/about/img-goorm-default.png';
import DanpoongImg from '../../../assets/images/about/img-danpoong-default.png';

import BeotkkotHoverImg from '../../../assets/images/about/img-beotkkot-hover.png';
import GoormHoverImg from '../../../assets/images/about/img-goorm-hover.png';
import DanpoongHoverImg from '../../../assets/images/about/img-danpoong-hover.png';

export default function Intro({ scrollTarget }) {
  return (
    <S.IntroWrapper ref={scrollTarget}>
      <S.HeaderTitleText>‘9oormthon univ’ 는</S.HeaderTitleText>
      <S.HeaderTextWrapper>
        <S.HeaderDescriptionText>
          봄과 가을을 기수로 하여 클라우드 교육 및 해커톤과
          <br />
          아이디어 실현의 장소를 제공해주는 전국 IT 연합 동아리 입니다.
        </S.HeaderDescriptionText>
      </S.HeaderTextWrapper>
      <S.ImgsWrapper>
        <S.ImgsSetWrapper className="beotkkot">
          <S.Img src={BeotkkotImg} />
          <S.Img src={BeotkkotHoverImg} className="hover-img" />
        </S.ImgsSetWrapper>
        <S.ImgsSetWrapper className="goorm">
          <S.Img src={GoormImg} />
          <S.Img src={GoormHoverImg} className="hover-img" />
        </S.ImgsSetWrapper>
        <S.ImgsSetWrapper className="danpoong">
          <S.Img src={DanpoongImg} />
          <S.Img src={DanpoongHoverImg} className="hover-img" />
        </S.ImgsSetWrapper>
      </S.ImgsWrapper>
    </S.IntroWrapper>
  );
}
