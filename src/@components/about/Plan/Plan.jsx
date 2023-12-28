import React from 'react';
import * as S from './style';
import Timeline from './Timeline';

export default function Plan({ scrollTarget }) {
  return (
    <S.PlanWrapper>
      <S.TitleText>앞으로의 계획은요,</S.TitleText>
      <Timeline />
    </S.PlanWrapper>
  );
}
