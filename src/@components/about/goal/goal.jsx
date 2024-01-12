import React from 'react';
import * as S from './style';

import GoalImgWhole from '../../../assets/svgs/goal-graphic_whole.svg';
import MainCloudDownImg from '../../../assets/svgs/main-cloud-down.svg';

export default function Goal() {
  return (
    <>
      <S.MainCloudDownImg url={MainCloudDownImg} />
      <S.GoalWrapper>
        <S.ContentsWrapper>
          <S.HeaderTextWrapper>
            <S.HeaderDescriptionText>우리의 목표는 단 한 가지</S.HeaderDescriptionText>
            <S.HeaderDescriptionTextSmall>우리의 목표는 단 한 가지</S.HeaderDescriptionTextSmall>
            <S.HeaderTitleText>
              {`직접 구현한 서비스가 작은 물방울이 되어\n큰 구름을 이루는 기회를 제공하는 것`}
            </S.HeaderTitleText>
            <S.HeaderTitleTextSmall>
              {`직접 구현한 서비스가 작은 물방울이 되어\n큰 구름을 이루는 기회를 제공하는 것`}
            </S.HeaderTitleTextSmall>
          </S.HeaderTextWrapper>
          <S.Img src={GoalImgWhole} />
        </S.ContentsWrapper>
      </S.GoalWrapper>
    </>
  );
}
