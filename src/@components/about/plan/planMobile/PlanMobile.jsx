import React from 'react';

import * as S from './style';
import Timeline from './Timeline';

// 이 컴포넌트는 ~ container-md(1199px) 까지를 다룬다

export default function PlanMobile({ scrollTarget }) {
  return (
    <S.PlanWrapper id="plan-mobile">
      <S.TitleText>앞으로의 계획은요,</S.TitleText>
      <Timeline />
    </S.PlanWrapper>
  );
}
