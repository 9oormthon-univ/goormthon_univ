import React from 'react';
import GridContainer from '../../../layout/GridContainer';
import HorizontalScroll from './HorizontalScroll';

import * as S from './style';

export default function BenefitDesktop() {
  return (
    <S.BenefitWrapper>
      <S.HeaderTitleText>구름톤 유니브에서 마음껏 누려요!</S.HeaderTitleText>
      <HorizontalScroll />
    </S.BenefitWrapper>
  );
}
