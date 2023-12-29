import React from 'react';
import GridContainer from '../../../layout/GridContainer';
import * as S from './style';
import Timeline from './Timeline';

export default function PlanMobile({ scrollTarget }) {
  return (
    <S.PlanWrapper id="plan-mobile">
      <GridContainer>
        <S.TitleText>앞으로의 계획은요,</S.TitleText>
        <Timeline />
      </GridContainer>
    </S.PlanWrapper>
  );
}
