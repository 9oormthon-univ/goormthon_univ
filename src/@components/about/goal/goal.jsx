import React from 'react';
import * as S from './style';

import GoalImg from '../../../assets/svgs/goal-graphic.svg';
import GoalRainImg from '../../../assets/svgs/goal-rain.svg';
import GridContainer from '../../layout/GridContainer';

export default function Goal() {
  return (
    <S.GoalWrapper>
      <GridContainer>
        <S.HeaderTextWrapper>
          <S.HeaderDescriptionText>우리의 목표는 단 한 가지</S.HeaderDescriptionText>
          <S.HeaderTitleText>
            직접 구현한 서비스가 작은 물방울이 되어
            <br />큰 구름을 이루는 기회를 제공하는 것
          </S.HeaderTitleText>
        </S.HeaderTextWrapper>
        <S.Img src={GoalImg} />
        <S.MovingImg src={GoalRainImg} />
      </GridContainer>
    </S.GoalWrapper>
  );
}
