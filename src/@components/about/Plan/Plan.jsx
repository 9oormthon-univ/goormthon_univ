import React from 'react';
import * as S from './style';

export default function Plan({ scrollTarget }) {
  return <S.PlanWrapper ref={scrollTarget}></S.PlanWrapper>;
}
