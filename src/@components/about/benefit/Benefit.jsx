import React from 'react';
import GridContainer from '../../layout/GridContainer';
import HorizontalScroll from './HorizontalScroll';

import * as S from './style';

export default function Benefit() {
  return (
    <S.BenefitWrapper>
      <GridContainer>
        <S.HeaderTitleText>9oormthonUNIV의 일원이 된다면,</S.HeaderTitleText>
        <HorizontalScroll />
      </GridContainer>
    </S.BenefitWrapper>
  );
}
