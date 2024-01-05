import React from 'react';
import GridContainer from '../../layout/GridContainer';
import ActivityList from './ActivityList';

import * as S from './style';

export default function Activity() {
  return (
    <S.ActivityWrapper>
      <GridContainer>
        <S.HeaderTitleText>구름톤유니브의 일원이 된다면,</S.HeaderTitleText>
        <ActivityList />
      </GridContainer>
    </S.ActivityWrapper>
  );
}
