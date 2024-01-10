import React, { useState } from 'react';
import * as S from './style';

import BeotkkotImg from '../../../assets/images/about/img-beotkkot-default.png';
import GoormImg from '../../../assets/images/about/img-goorm-default.png';
import DanpoongImg from '../../../assets/images/about/img-danpoong-default.png';

import BeotkkotHoverImg from '../../../assets/images/about/img-beotkkot-hover.png';
import GoormHoverImg from '../../../assets/images/about/img-goorm-hover.png';
import DanpoongHoverImg from '../../../assets/images/about/img-danpoong-hover.png';
import GridContainer from '../../layout/GridContainer';

import MainCloudImg from '../../../assets/svgs/main-cloud-up.svg';

export default function Intro({ scrollTarget }) {
  const [beotkkotExploded, setBeotkkotExploded] = useState(false);
  const [goormExploded, setGoormExploded] = useState(false);
  const [danpoongExploded, setDanpoongExploded] = useState(false);

  const handleImageClick = (setImageExploded) => {
    setImageExploded(true);
    setTimeout(() => {
      setImageExploded(false);
    }, 500);
  };

  return (
    <S.IntroWrapper ref={scrollTarget}>
      <S.MainCloudImg url={MainCloudImg} />
      <GridContainer>
        <S.HeaderTitleText>9oormthonUNIV 는</S.HeaderTitleText>
        <S.HeaderTextWrapper>
          <S.HeaderDescriptionText>
            봄과 가을을 기수로 하여
            <br />
            아이디어 실현의 장을 제공 해주는 IT 연합 동아리 입니다.
          </S.HeaderDescriptionText>
        </S.HeaderTextWrapper>
        <S.ImgsWrapper>
          <S.Imgs>
            <S.ImgsSetWrapper
              className={`beotkkot ${beotkkotExploded ? 'exploded' : ''}`}
              onClick={() => handleImageClick(setBeotkkotExploded)}
            >
              <S.Img src={BeotkkotImg} />
              <S.Img src={BeotkkotHoverImg} className={`hover-img ${beotkkotExploded ? 'exploded' : ''}`} />
            </S.ImgsSetWrapper>
            <S.ImgsSetWrapper
              className={`goorm ${goormExploded ? 'exploded' : ''}`}
              onClick={() => handleImageClick(setGoormExploded)}
            >
              <S.Img src={GoormImg} />
              <S.Img src={GoormHoverImg} className={`hover-img ${goormExploded ? 'exploded' : ''}`} />
            </S.ImgsSetWrapper>
            <S.ImgsSetWrapper
              className={`danpoong ${danpoongExploded ? 'exploded' : ''}`}
              onClick={() => handleImageClick(setDanpoongExploded)}
            >
              <S.Img src={DanpoongImg} />
              <S.Img src={DanpoongHoverImg} className={`hover-img ${danpoongExploded ? 'exploded' : ''}`} />
            </S.ImgsSetWrapper>
          </S.Imgs>
        </S.ImgsWrapper>
      </GridContainer>
    </S.IntroWrapper>
  );
}
