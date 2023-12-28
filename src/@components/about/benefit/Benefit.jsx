import React from 'react';
import GridContainer from '../../layout/GridContainer';
import BenefitList from './BenefitList';

import * as S from './style';

export default function Benefit() {
  return (
    <S.BenefitWrapper>
      <GridContainer>
        <S.HeaderTitleText>구름톤 유니브의 일원이 된다면,</S.HeaderTitleText>
        <BenefitList />
      </GridContainer>
    </S.BenefitWrapper>
  );
}
