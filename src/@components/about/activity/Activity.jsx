import React from 'react';
import GridContainer from '../../layout/GridContainer';
import ActivityList from './ActivityList';

import * as S from './style';

export default function Activity() {
  return (
    <S.ActivityWrapper>
      <GridContainer>
        <S.HeaderTitleText>이런 활동들을 해요!</S.HeaderTitleText>
        <ActivityList />
      </GridContainer>
    </S.ActivityWrapper>
  );
}
