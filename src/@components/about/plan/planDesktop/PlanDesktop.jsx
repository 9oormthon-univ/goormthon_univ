import React from 'react';
import GridContainer from '../../../layout/GridContainer';
import CardListUpper from './CardListUpper';
import * as S from './style';
import Timeline from './Timeline';

export default function PlanDesktop() {
  return (
    <S.PlanWrapper id="plan-desktop">
      <GridContainer>
        <S.TitleText>앞으로의 계획은요,</S.TitleText>
        <Timeline />
      </GridContainer>
    </S.PlanWrapper>
  );
}
