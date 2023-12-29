import React from 'react';
import GridContainer from '../../../layout/GridContainer';
import BenefitList from './BenefitList';

import * as S from './style';

export default function BenefitMobile() {
  return (
    <S.BenefitWrapper>
      <GridContainer>
        <S.HeaderTitleText>9oormthonUNIV의 일원이 된다면,</S.HeaderTitleText>
        <BenefitList />
      </GridContainer>
    </S.BenefitWrapper>
  );
}
