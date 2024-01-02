import React from 'react';

import * as S from './style';
import Timeline from './Timeline';

export default function PlanMobile({ scrollTarget }) {
  return (
    <S.PlanWrapper id="plan-mobile">
      <S.TitleText>앞으로의 계획은요,</S.TitleText>
      <Timeline />
    </S.PlanWrapper>
  );
}
