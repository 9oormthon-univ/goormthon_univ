import { Text } from '@goorm-dev/gds-components';
import React from 'react';
import * as S from './style';

function RecuritCautionRowBox({ title, detail }) {
  return (
    <S.CautionRowBox>
      <S.CautionTitle>
        <Text typography="heading5">{title}</Text>
      </S.CautionTitle>
      <S.CautionDetail>
        <Text typography="paragraph1">{detail}</Text>
      </S.CautionDetail>
    </S.CautionRowBox>
  );
}

export default RecuritCautionRowBox;
